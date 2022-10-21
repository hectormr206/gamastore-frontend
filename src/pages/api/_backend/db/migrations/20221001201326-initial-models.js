'use strict';

// User
const { UserSchema, USER_TABLE } = require('../models/users/user.model');

// Products
const { ProductSchema, PRODUCT_TABLE } = require('../models/products/products.model');
const { ProductBrandSchema, PRODUCT_BRAND_TABLE } = require('../models/products/products_brands.model');
const { ProductCategorySchema, PRODUCT_CATEGORY_TABLE } = require('../models/products/products_categories.model');
const { ProductMeasureSchema, PRODUCT_MEASURE_TABLE } = require('../models/products/products_measures.model');

module.exports = {
  async up(queryInterface) {
    // User
    await queryInterface.createTable(USER_TABLE, UserSchema);

    // Products
    await queryInterface.createTable(PRODUCT_MEASURE_TABLE, ProductMeasureSchema);
    await queryInterface.createTable(PRODUCT_CATEGORY_TABLE, ProductCategorySchema);
    await queryInterface.createTable(PRODUCT_BRAND_TABLE, ProductBrandSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down(queryInterface) {
    // Products
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(PRODUCT_BRAND_TABLE);
    await queryInterface.dropTable(PRODUCT_CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_MEASURE_TABLE);

    // User
    await queryInterface.dropTable(USER_TABLE);
  }
};
