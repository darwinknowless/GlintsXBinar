models bisa terbagi 
1. migrations
2. seeders

alur applikasi
1. starting index.js

2. ke folder routes
    >> memcari routes yg di inginkan contoh: transaksiRoutes.js

3. dari routes menuju folder controllers
    >> memcari controller yg di inginkan contoh: transaksiController.js

4. fungsi inside controller
    >> getAll
    >> getOne
    >> create
    >> update
    >> delete

5. FLOW SERVER
//APP > REQ (Client) > PARSER (BODY) > ROUTES > . . . . . RES (SERVER)

6. Validator Flow
index >> routes >>  validator(middlewear) >> methdod (create)
jika success continue to controller (create)
Fungsi validator : agar tidak mudah di inject sql oleh hacker

7. Contoh Fungsi Delete
-- ON POSTMAN http://localhost:3000/transaksi/5
>> http://localhost -----> Server
>> :3000/ -----> Port
>> "/" -----> Root
>> ../transaksi/ -----> PATH
>> ../5 -----> params.id
-- ON POOSTMAN ada params.body
//Params.Body contoh
KEY = id_pemasok
    = nama 
VALUE
    = 5
    = "Lifebuoy"

8. Contoh Fungsi Create Barang with Image
-- ON POSTMAN http://localhost:3000/barang/
-- Menu Bar
    1. Params
    2. Auth
    3. Header
    4. Body
    5. Pre-req
    6. Test
    7. Settings
-- Pilih 4. Body
    1. form-data
    2. x-www-form-urlencoded
    3. raw
    4. binary
    5. GraphQL
-- Pilih 1. form-data
    KEY             VALUE
    -- id_pemasok   = 1
    -- nama         = Darwin
    -- harga        = 20000
    -- image        = file yng ingin di upload


