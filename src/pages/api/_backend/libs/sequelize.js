const { Sequelize } = require('sequelize');

const { config } = require('pages/api/_backend/config/config');
const setupModels = require('pages/api/_backend/db/models');

const options = {
  dialect: 'mysql',
  logging: config.isProd ? false : true
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
