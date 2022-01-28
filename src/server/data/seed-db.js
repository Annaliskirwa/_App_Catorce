required('dotenv').config();

const users = require('./users');
const contacts = require('./contacts.json');

const MongoClient = require ('mongodb').MongoClient;
const bcrypt = require('bcrypt');

function seedCollection(collectionName, initialRecords){
    MongoClient.connect(process.env.DB_CONN, (err, db)=>{
        console.log('connected to mongodb');

        const collection = db.collection(collectionName);

        collection.remove();

        initialRecords.forEach(item => {
            if (item.password){
                item.password = bcrypt.hashSync(item.password, 10);
            }
            
        });
        collection.insertMany(initialRecords, (err, result) => {
            console.log(`${result.insertedCount} records inserted`);
            console.log('closing database connection..,...');
            db.close();
            console.log('Everything is done now');
        });
    });
}

