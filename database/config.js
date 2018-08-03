const Sequelize = require('sequelize');

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    operatorsAliases: Sequelize.Op,
    dialect: 'postgres',
    dialectOptions: {
      ssl: (process.env.DATABASE_SSL_VALUE === 'true')
    }
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    operatorsAliases: Sequelize.Op,
    dialect: 'postgres',
    dialectOptions: {
      ssl: (process.env.DATABASE_SSL_VALUE === 'true')
    }
  }
};
