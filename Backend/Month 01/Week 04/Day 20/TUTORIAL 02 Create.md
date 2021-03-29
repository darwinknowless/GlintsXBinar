1. Buat database baru development
    >> sequelize db:create --env development
    -- hasilnya : Database "penjualan_development" created.

2. Buat Table
    >> sequelize model:generate --name Pelanggan --attributes nama:string
    >> sequelize model:generate --name Pemasok --attributes nama:string
    >> sequelize model:generate --name Barang --attributes nama:string,harga:decimal,id_pemasok:integer,image:string
    >> sequelize model:generate --name Transaksi --attributes id_barang:integer,id_pelanggan:integer,jumlah:integer,total:decimal
    -- NOTE : Models & Creation Created


3. Tambahkan ke setiap table migrasi di bawah update
    >> deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
    }

4. tambahkan ke setipa models kecuali index.js
    >>  paranoid: true, // Enable sofdelete
        timestamps: true, // Enable timestamp
        freezeTableName: true, // Because we use bahassa

5. Migrasi
    >> sequelize db:migrate --env development


