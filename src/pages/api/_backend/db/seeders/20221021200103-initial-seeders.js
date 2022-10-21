'use strict';
const bcrypt = require('bcrypt');

// Users
const { USER_TABLE } = require('../models/users/user.model');

// Products
const { PRODUCT_TABLE } = require('../models/products/products.model');
const { PRODUCT_BRAND_TABLE } = require('../models/products/products_brands.model');
const { PRODUCT_CATEGORY_TABLE } = require('../models/products/products_categories.model');
const { PRODUCT_MEASURE_TABLE } = require('../models/products/products_measures.model');

// Products
const { ProductInitial } = require('./products/products.initial');
const { ProductBrandInitial } = require('./products/products_brands.initial');
const { ProductCategoryInitial } = require('./products/products_categories.initial');
const { ProductMeasureInitial } = require('./products/products_measures.initial');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Users
    const hash = await bcrypt.hash('123456789', 10);
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        email: 'contact@hectormr.com',
        password: hash,
        role: 'admin',
        name: 'Héctor',
        last_name: 'Martínez',
        created_at: new Date()
      }
    ]);

    // Products
    await queryInterface.bulkInsert(PRODUCT_MEASURE_TABLE, ProductMeasureInitial);
    await queryInterface.bulkInsert(PRODUCT_CATEGORY_TABLE, ProductCategoryInitial);
    await queryInterface.bulkInsert(PRODUCT_BRAND_TABLE, ProductBrandInitial);
    await queryInterface.bulkInsert(PRODUCT_TABLE, ProductInitial);
  },

  async down(queryInterface) {
    // Users
    await queryInterface.bulkDelete(USER_TABLE, null, {});

    // Products
    await queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
    await queryInterface.bulkDelete(PRODUCT_BRAND_TABLE, null, {});
    await queryInterface.bulkDelete(PRODUCT_CATEGORY_TABLE, null, {});
    await queryInterface.bulkDelete(PRODUCT_MEASURE_TABLE, null, {});
  }
};
