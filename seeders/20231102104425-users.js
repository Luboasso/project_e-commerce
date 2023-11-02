const bcrypt = require('bcryptjs');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize)  {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync('password123', 10),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'janesmith@example.com',
        password: bcrypt.hashSync('securepassword', 10),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'michael@example.com',
        password: bcrypt.hashSync('mypass123', 10),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Emily',
        last_name: 'Wilson',
        email: 'emilywilson@example.com',
        password: bcrypt.hashSync('secret1234', 10),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'David',
        last_name: 'Brown',
        email: 'davidbrown@example.com',
        password: bcrypt.hashSync('strongpassword', 10),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
