'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('Products', [
      {
        product_name: 'Ladybug Miraculous',
        description: 'The powerful Ladybug Miraculous, allowing the wearer to transform into Ladybug.',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Cat Miraculous',
        description: 'The mysterious Chat Noir Miraculous, for transforming into Chat Noir.',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Fox Miraculous',
        description: 'The clever Rena Rouge Miraculous, perfect for heroes who love fox-themed powers.',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Turtle Miraculous',
        description: 'The sturdy Carapace Miraculous, granting incredible protection and strength.',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Bee Miraculous',
        description: 'The glamorous Queen Bee Miraculous, allowing the wearer to become a superhero with bee-themed powers.',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
