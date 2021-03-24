Follow this step before start
1. Configuration
    >> install module from npm
        -- sudo npm install -g nodemon
            >> cek versi
                -- nodemon -v
        -- npm install express mysql2
    >> after that we need to make package.json
        -- npm init
    >> dalam package.json tambahin di baris script
        -- "dev": "nodemon index.js"
               
2. Buat file index.js dalam folder Day 18

3. Buat 3 folder dalam Folder Day 18
    >> controllers, models, routes

4. Dalam folder routes buat transaksiRoutes.js

5. Dalam folder controllers buat transaksiController.js

6. Dalam folder moduls buat index.js untuk buat connection

7. setelah semuanya dibikin dan dikoneksikan satu sama lain

8. Run VS Code : 
    -- npm run dev

8. Buka postman bikin folder Day 18
    -- add request 
    -- bikin get all "http://localhost:3000/transaksi"
    -- save, lalu test 
    -- klik send