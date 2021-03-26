-- CREATE DATABASE
CREATE DATABASE penjualan;

-- USE DATABASE
USE penjualan;

/* CREATE TABLE */
CREATE TABLE pemasok (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE barang (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL,
     harga DECIMAL NOT NULL,
     id_pemasok BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_pemasok) REFERENCES pemasok(id)
);

CREATE TABLE pelanggan (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE transaksi (
    id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
    id_barang BIGINT UNSIGNED NOT NULL,
    id_pelanggan BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_barang) REFERENCES barang(id),
    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id),
    waktu DATETIME DEFAULT now() NOT NULL,
    jumlah INT NOT NULL,
    total DECIMAL NOT NULL
);
/* END CREATE TABLE */

/* INSERT INTO (CREATE DATA ON TABLE) */
INSERT INTO pelanggan(nama) VALUES 
	("Darwin"),
	("Fikri"),
	("Alvian");

INSERT INTO pelanggan(nama) VALUES 
	("Bayu");

INSERT INTO pelanggan(id, nama) VALUES 
	(10, "Lia");

INSERT INTO pemasok(nama) VALUES 
	("Septian"),
	("Najmul"),
	("Ebit"),
	("Bayu"),
	("Alvian"),
	("Lia"),
	("Zulfikri"),
	("Riyo"),
	("Irvan"),
	("Rahmat");

INSERT INTO pemasok(id, nama) VALUES 
	(20, "Gilang"),
	(21, "Aldino"),
	(22, "Shella");

INSERT INTO barang(nama, harga, id_pemasok) VALUES 
	("Pepsodent", 14500, 1),
	("Lifeboy", 24600, 2),
	("Clear", 44500, 3);

INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES 
	(1, 1, 1, 14500),
	(2, 2, 2, 49200),
	(3, 3, 3, 133500);
/* END INSERT INTO */

/* SELECT */
SELECT * FROM pelanggan;

SELECT * FROM pelanggan WHERE id = 10;

SELECT * FROM pemasok;

SELECT * FROM pemasok WHERE id = 2;

SELECT * FROM barang;

SELECT * FROM transaksi;

SELECT * FROM transaksi WHERE id = 3;
/* END SELECT */ 

/*SELECT ORDER BY*/
SELECT * FROM pelanggan ORDER BY nama;

-- Urutin nama dari belakang (Descendind)
SELECT * FROM pelanggan ORDER BY nama DESC; 
/* END SELECT ORDER BY */ 

/* DELETE DATA*/
DELETE FROM pemasok WHERE id = 22;

DELETE FROM pelanggan WHERE id = 10; /* Safe way to delete data */

DELETE FROM pelanggan WHERE nama = "Lia"; /* Delete data dengan nama Lia */

DELETE FROM pelanggan WHERE id = 1;
/* END DELETE DATA */

/* DROP TABLE/DATABASE */
DROP TABLE pemasok; -- jika tidak bisa didelete, berarti data table digunakan table lain
/* END DROP TABLE/DATABASE */

/* UPDATE DATA */
UPDATE pemasok SET nama = "Knowless" WHERE id = 1;

UPDATE barang SET nama = "Sunsilk" WHERE id = 2; -- Update 1 komponen data

UPDATE barang SET nama = "Phantene", harga = 50000 WHERE id =2; -- update lebih dari 2 komponen data
/* END UPDATE DATA */

/* SELECT LIMIT */
SELECT * FROM pelanggan ORDER BY nama DESC LIMIT 2;
/* END SELECT LIMIT */

/* JOIN */
-- Saat join liat relasinya dulu
SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total
FROM transaksi t
JOIN barang b ON t.id_barang = b.id
JOIN pelanggan p ON p.id = t.id_pelanggan
JOIN pemasok pem ON b.id_pemasok = pem.id
/* END JOIN */

/* SELECT LIKE */
SELECT * FROM pelanggan WHERE nama LIKE '%bayu%';
/* END SELECT LIKE */




