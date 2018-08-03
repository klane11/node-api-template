const fs = require('fs');
const Sequelize = require('sequelize');
const files = fs.readdirSync(__dirname);
const db = {};

const sequelize = new Sequelize(
  process.env.GRAYSCALE_DATABASE_NAME,
  process.env.GRAYSCALE_DATABASE_USERNAME,
  process.env.GRAYSCALE_DATABASE_PASSWORD, {
    host: process.env.GRAYSCALE_DATABASE_HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: false,
    dialectOptions: {
      ssl: (process.env.GRAYSCALE_DATABASE_SSL_VALUE === "true"),
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

