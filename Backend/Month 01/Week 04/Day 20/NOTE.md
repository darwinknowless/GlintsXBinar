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

// FLOW SERVER
// APP > REQ (Client) > PARSER (BODY) > ROUTES > . . . . . RES (SERVER)

//Validator Flow
index >> routes >>  validator(middlewear) >> methdod (create)
jika success continue to controller (create)

// Contoh Fungsi Delete
ON POSTMAN http://localhost:3000/transaksi/5
>> http://localhost -----> Server
>> :3000/ -----> Port
>> "/" -----> Root
>> ../transaksi/ -----> PATH
>> ../5 -----> params.id

//Params.Body contoh
KEY = id_pemasok
    = nama 
VALUE
    = 5
    = "Lifebuoy"