'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('User_Pokemons', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fk_UserId',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then(()=>{
      queryInterface.addConstraint('User_Pokemons', {
        fields: ['PokemonId'],
        type: 'foreign key',
        name: 'fk_PokemonId',
        references: {
          table: 'Pokemons',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('User_Pokemon', 'fk_UserId')
    .then(()=>{
      queryInterface.removeConstraint('User_Pokemon', 'fk_PokemonId')
    })
  }
};
