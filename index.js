const express=require('express');
const Mongoose=require('mongoose');

//llamado a archivos importados

const approuter=require('./routes/app');
const usuariorouter=require('./routes/usuario');

//conection to database

Mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB',(err, res)=>{
    if(err)  throw err;
    console.log('connect to database');
});

const app=express();

const puert=app.set('port', process.env.PORT || 3000);

//routes

app.use('/usuario', usuariorouter);
app.use('/', approuter);

app.listen(puert,()=>{
    console.log('port conectado');
});