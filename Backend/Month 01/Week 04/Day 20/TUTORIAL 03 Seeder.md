1. membuat seeder/ dummy data
    >> sequelize seed:generate --name add-data-pemasok
    >> sequelize seed:generate --name add-data-pelanggan
    >> sequelize seed:generate --name add-data-barang
    >> sequelize seed:generate --name add-data-transaksi

2. isi file dummy dalam folder seeders dengan data contoh
-- CONTOH DATA "edit seeders/add-data-pelanggan.js" --
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pelanggan', [{
      nama: "Firman",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nama: "Wawan",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nama: "Ilham",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pelanggan', null, {})
  }
};

3. setelah semua dummy di isi data contoh
    >> sequelize db:seed:all