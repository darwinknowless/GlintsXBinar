Follow this step before start
1. Configuration
    >> install module from npm
        -- sudo npm install -g nodemon
        -- npm install express mysql2
    >> after that we need to make package.json
        -- npm init
    >> copy this to package.json
        {
            "name": "day18",
            "version": "1.0.0",
            "description": "Coba express and mysql",
            "main": "index.js",
            "dependencies": {
                "express": "^4.17.1",
                "mysql": "^2.18.1",
                 "nodemon": "^2.0.6"
                },
            "devDependencies": {},
            "scripts": {
                "dev": "nodemon index.js"
                 },
            "author": "Reza",
            "license": "ISC"
        }

