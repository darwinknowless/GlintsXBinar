const { MongoClient } = require("mongodb"); // Import mongodb

const uri = process.env.MONGO_URI; // uri

// Make connection variable
const connection = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try {
  connection.connect(); // Run the connection
  console.log("MongoDB Connected!");
} catch (e) {
  console.error(e);
}

module.exports = connection; // Export connection
