//Import MongoClient
const { MongoClient } = require("mongodb"); 

//Address of Cluster or Server (MongoDB)
const uri = process.env.MONGO_URI; 

//Make new connection
const connection = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

//Run the connection
try {
  connection.connect();
  //If connection succeed
  console.log("MongoDB connected!");
} catch (e) {
  //If connection error
  console.error(e);
}

//Export connection
module.exports = connection;
