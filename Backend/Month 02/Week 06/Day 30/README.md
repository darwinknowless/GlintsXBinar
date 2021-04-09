1. install 
--npm i -D cross-env jest supertest

2. masukkan ini dibawah dependencies
 "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/"
    ]
  }

3. ubah script test package jsonseperti dibawah
--"test": "cross-env NODE_ENV=test jest --testTimeout=10000 --coverage --forceExit",
