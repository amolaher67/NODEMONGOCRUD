const express = require('express');
const bodyParser = require('body-parser');

//import route for product
var productRoute = require('./routes/product.route');

//Initialse our express app
const app =  new express();

//setup mogoConnection
  const mongoose = require('mongoose');
  let dev_db_url = 'mongodb://localhost:2707/TESTDB';

 const mongoDB = process.env.MONGODB_URI || dev_db_url;

 mongoose.connect(mongoDB,{useNewUrlParser: true});

// mongoose.Promise = global.Promise;

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {

    console.log(`we're connected!`);
    
});

// const mongo = require('mongodb').MongoClient;
// mongo.connect(dev_db_url, (err, client) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Mongo DB connected');

//     const db = client.db('kennel');

//     const collection = db.collection('dogs');

//     collection.insertOne({name: 'Roger'}, (err, result) => 
//     {
//        console.log('Collection insertOne');
//     });

//   });

  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//register first middlerwear
app.use('/products',productRoute);


let port = 1234;

app.listen(port,()=>{
    console.log('app is running on port number:  '+port);
});