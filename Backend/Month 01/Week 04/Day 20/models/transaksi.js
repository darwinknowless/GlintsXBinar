'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaksi.init({
    id_barang: DataTypes.INTEGER,
    id_pelanggan: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    paranoid: true, // Enable sofdelete
    timestamps: true, // Enable timestamp
    freezeTableName: true, // Because we use bahassa
    modelName: 'transaksi',
  });
  return Transaksi;
};