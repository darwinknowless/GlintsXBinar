'use strict';
const { Model } = require('sequelize');
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
    paranoid: true, // Activate soft delete
    timestamps: true, // timestamps
    freezeTableName: true, // because we use Indonesian
    modelName: 'pemasok',
  });
  return Pemasok;
};
