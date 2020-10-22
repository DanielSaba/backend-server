const express=require('express');
const Mongoose=require('mongoose');

//conection to database

Mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB',(err, res)=>{
    if(err)  throw err;
    console.log('connect to database');
});

const app=express();

const puert=app.set('port', process.env.PORT || 3000);

app.listen(puert,()=>{
    console.log('port conectado');
});