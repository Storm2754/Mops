var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("mops");
database.dropDatabase()
database = client.db("mops");
const dogs = database.collection("dogs");
const result = await dogs.insertOne({name:"Мопся"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()