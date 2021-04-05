const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const uri = process.env.MONGO_URI;

const mongoConnect = async (callback) => {
    try {
        const client = await MongoClient.connect(
            uri, { useNewUrlParser: true, useUnifiedTopology: true }
        );

        _db = client.db();

        callback();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;