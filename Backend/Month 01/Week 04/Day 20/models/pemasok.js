'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pemasok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pemasok.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true, // Enable sofdelete
    timestamps: true, // Enable timestamp
    freezeTableName: true, // Because we use bahassa
    modelName: 'pemasok',
  });
  return Pemasok;
};