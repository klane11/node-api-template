const db        = {};
const fs        = require('fs');
const files     = fs.readdirSync(__dirname);
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.TEST_DATABASE_NAME,
  process.env.TEST_DATABASE_USERNAME,
  process.env.TEST_DATABASE_PASSWORD, {
    host: process.env.TEST_DATABASE_HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: false,
    dialectOptions: {
      ssl: (process.env.TEST_DATABASE_SSL_VALUE === "true"),
    },
    define: {
      underscored: true,
      paranoid: true
    },
    pool: {
      max: 8,
      min: 0,
      idle: 10000,
      acquire: 10000
    }
  });

require('pg').types.setTypeParser(1114, stringValue => {
  return new Date(stringValue + '+0000');
});

files.forEach(function(file) {
  if (!file.includes('index')) {
    let moduleName = file.split('.')[0];
    moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    db[moduleName] = sequelize.import(__dirname + '/' + file);
  }
});

Object.keys(db).forEach(moduleName => {
  if (db[moduleName].associate) {
    db[moduleName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

