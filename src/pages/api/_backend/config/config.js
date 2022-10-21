require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  dbUrl: process.env.DATABASE_MYSQL_URL
};

module.exports = { config };
