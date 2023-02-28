'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      fullname: 'wawan sigit',
      username: 'wawans',
      level: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'gilang putri',
      username: 'gilangkun',
      level: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'terkadang apabila',
      username: 'sometimes',
      level: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
