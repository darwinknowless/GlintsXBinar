1. configure sequelize 
    >> sudo npm install -g sequelize-cli
    >> npm init
    >> npm install --save sequelize mysql2 express body-parser express-validator multer dotenv 
    >> sequelize init
    >> buka package.json tambahkan di baris Script
        -- "dev": "NODE_ENV=development nodemon index.js"
    >> ke folder config, config.json, ganti user, pass, database yg kamu punya.
        -- "development": {
             "username": "darwin",
             "password": "12345678",
             "database": "penjualan_development",
             "host": "127.0.0.1",
             "dialect": "mysql"
            },
2. Buat database baru development
    >> sequelize db:create --env development
    -- hasilnya : Database "penjualan_development" created.

3. Buat Table
    >> sequelize model:generate --name Pelanggan --attributes nama:string
    >> sequelize model:generate --name Pemasok --attributes nama:string
    >> sequelize model:generate --name Barang --attributes nama:string,harga:decimal,id_pemasok:integer,image:string
    >> sequelize model:generate --name Transaksi --attributes id_barang:integer,id_pelanggan:integer,jumlah:integer,total:decimal
    -- NOTE : Models & Creation Created



