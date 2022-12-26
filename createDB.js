var MongoClient=require('mongodb').MongoClient
var data = require("./data.js").data
const uri = "mongodb://127.0.0.1:27017/"
const client=new MongoClient(uri)

async function run(){
    try{
        await client.connect();
        var database=client.db("mops");
        database.dropDatabase()
        database=client.db("mops");
        const dogs=database.collection("dogs");
        const result=await dogs.insertOne({name:"Мопся"});
        console.log(`${result.insertedCount} documents were inserted`);
    }
    finally{
        await client.close();
    }
    }
run()



// командой insertOne добавляем документ ({ name: “Мопся”});
// командой insertMany добавляем несколько документов ({ name: “Мопся”},{name:“Крыса”});

//Команда collection (строка 12)позволяет по имени dogs получить доступ к несуществующей коллекции dogs  
//несуществующей базы данных mops