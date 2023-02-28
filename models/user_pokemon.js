'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.User = this.belongsTo(models.User);
      this.Pokemon = this.belongsTo(models.Pokemon);
    }
  }
  User_Pokemon.init({
    UserId: DataTypes.INTEGER,
    PokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Pokemon',
  });
  return User_Pokemon;
};