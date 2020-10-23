const express=require('express');
const Usuario=require('../model/usuario');
const bcryptjs=require('bcryptjs');
const app=express();

const jwt=require('jsonwebtoken');

//------------------------------------------

const SEED=require('../config/config').SEED;
const mdAutenticacion = require('../middlewares/autenticacion');


app
.get('/',(req,res)=>{
    console.log('usuarios');
    Usuario.find({},()=>{

    });
});

//-------------------------//
//Verificar Tokes
//-------------------------//





//Guardar usuario

app.post('/', mdAutenticacion.verificaToken ,(req, res) => {

    const usuario=new Usuario({
        nombre:req.body.nombre,
        email:req.body.email,
        password:bcrypt.hashSync(body.password,10),
        img:req.body.img,
        role:req.body.role
    })

    usuario.save();

    
    
});

app.delete('/:id', (req, res) => {
    
    Usuario.findByIdAndRemove((err, usuarioBorrado)=>{
        
        if(err){

            return res.status(500).json({
                ok:false,
                mensaje:'error al crear',
                errors:error
            });
        }

        res.status(200).json({
            ok:true,
            usuario:usuarioBorrado
        })

    });

});

module.exports=app;