'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      Product.belongsTo(models.Category),
        Product.belongsToMany(models.Order, {

          through: models.ProductOrder,
        })
    }
  }
  Product.init({
    product_name: {
      type: DataTypes.STRING,
      allowNull: false, // Field cannot be null
      validate: {
        notNull: {
          msg: 'Please enter a product name',
        },
        len: [1, 255], // Product name must be between 1 and 255 characters
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a price',
        },
        isFloat: {
          msg: 'Price must be a valid number',
        },
        min: 0, // Price cannot be negative
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a description',
        },
        len: [1, 1000], // Description must be between 1 and 1000 characters
      },
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please select a category',
        },
        isInt: {
          msg: 'Category ID must be an integer',
        },
      },
    },

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};