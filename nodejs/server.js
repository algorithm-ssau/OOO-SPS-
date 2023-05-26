const express=require('express');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');

require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

let db;

/*app.listen(PORT, (err)=>{
    err ? console.log(err) : console.log('Listening port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World from docker!')
  })*/



connectToDb((err) => {
    if(!err){
        app.listen(PORT, (err)=>{
            err ? console.log(err) : console.log('Listening port 3000');
        });
        db = getDb();
    }   else{
        console.log(err); 
    } 
});


app.get('/machineries', (req, res) =>{
    const machineries = [];
    db
    .collection('machinery_info')
    .find()
    .forEach((machinery) => machineries.push(machinery))
    .then(() => {
        res
        .status(200)
        .json(machineries);
    })
    .catch(() => {
        res.status(500)
        .json({error: "Something goes wrong"});
    })
});

app.get('/machineries/:id', (req, res) => {
if(ObjectId.isValid(req.params.id)){
    db
    .collection('machinery_info')
    .findOne({ _id: new ObjectId(req.params.id)})
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => {
        res
        .status(500)
        .json({error: "Something goes wrong"});
    })
}else{
    res
    .status(500)
    .json({error: "Wrong id"});
}   
});

//node server.js
//http://localhost:3000/machineries
//http://localhost:3000/machineries/ [любой id]




