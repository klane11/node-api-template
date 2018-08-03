module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres',
    dialectOptions: {
      ssl: (process.env.DATABASE_SSL_VALUE === "true")
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres',
    dialectOptions: {
      ssl: (process.env.DATABASE_SSL_VALUE === "true")
    }
  }
};
