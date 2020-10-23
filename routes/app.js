const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    console.log('mi ruta');
});

module.exports=app;