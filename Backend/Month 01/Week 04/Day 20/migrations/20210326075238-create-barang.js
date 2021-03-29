'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('barang', {
      id: { // <-----ini Atribut/Column
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        // Tambahain ini
        unique: true, 
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
    // Tambahin ini
    await queryInterface.addConstraint("barang", { // Tambahin ini
      fields: ["id_pemasok"],
      type: "foreign key",
      name: "custom_fkey_id_pemasok",
      references: {
      //Required field
      table: "pemasok",
      field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
      }); 
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('barang');
  }
};