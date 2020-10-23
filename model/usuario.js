const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const Schema=mongoose.Schema;

const rolesValidos={
    values:['ADMIN_ROLE','USER_ROLE'],
    message:'{VALUE} no es un rol permitido'
};

const UsuarioSchema=new Schema({

nombre:{type:String, required: [true, 'El nombre es necesario']},
email:{type:String, required: [true, 'El correo es necesario']},
password:{type:String, required:[true,'Obligatorio']},
img:{type:String,required:false},
role:{type:String, required:true,default:'USER_ROLE', enum:rolesValidos}

});

UsuarioSchema.plugin(uniqueValidator,{message: '{PATH} debe ser unici'});

module.exports=mongoose.model('Usuario',UsuarioSchema);