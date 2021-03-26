'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('barang', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        unique: true, // Tambahain ini
        type: Sequelize.STRING
      },
      harga: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      id_pemasok: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barangs');
  }
};