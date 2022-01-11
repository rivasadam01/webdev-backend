'use strict';

const bcrypt=require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {
       nickname:'zero',
       username:'zero',
       password:bcrypt.hashSync('password',10),
       role:'admin'
     },
     {
      nickname:'pixie',
      username:'pixie',
      password:bcrypt.hashSync('password',10),
      role:'user'
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
