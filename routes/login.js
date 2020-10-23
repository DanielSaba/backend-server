const express=require('express');
const Usuario=require('../model/usuario');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

//------------------------------------------

const SEED=require('../config/config').SEED;

const app=express();

app.post('/',()=>{

Usuario.findOne({email:req.body.email},(err, usuarioDB)=>{

    if(err){
        return res.status(500).json({
            ok:false,
            mensaje:'error al buscar usuarios',
            errors:error
        });
    }

    if(!usuarioDB){
        return res.status(500).json({
            ok:false,
            mensaje:'credenciales incorrectas',
            errors:error
        });
    }

    if(!bcrypt.compareSync(body.password,usuarioDB.password)){
        return res.status(500).json({
            ok:false,
            mensaje:'credenciales incorrectas password',
            errors:error
        });
    }

    //crear un token
    
    usuarioDB.password=':)';

    const token=jwt.sign({usuario:usuarioDB},SEED,{spiresIn:14400});

    res.status(200).json({
        ok:true,
        usuario:usuarioDB,
        token:token,
        id:usuarioDB._id
    });

})

})



module.exports=app;