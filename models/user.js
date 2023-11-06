'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order);
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your first name",

        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your last name",

        },
      },
    },

    email: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your email",
        },
        isEmail: {
          msg: "Please enter a valid email",
        },
      },
    },

    password: DataTypes.STRING,
  
  }, 
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};