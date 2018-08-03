const Sequelize = require('sequelize');

module.exports = {
  development: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME,
    host: process.env.TEST_DATABASE_HOSTNAME,
    operatorsAliases: Sequelize.Op,
    dialect: 'postgres',
    dialectOptions: {
      ssl: (process.env.TEST_DATABASE_SSL_VALUE === 'true')
    }
  },
  test: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME,
    host: process.env.TEST_DATABASE_HOSTNAME,
    dialect: 'postgres'
  },
  production: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME,
    host: process.env.TEST_DATABASE_HOSTNAME,
    operatorsAliases: Sequelize.Op,
    dialect: 'postgres',
    dialectOptions: {
      ssl: (process.env.TEST_DATABASE_SSL_VALUE === 'true')
    }
  }
};
