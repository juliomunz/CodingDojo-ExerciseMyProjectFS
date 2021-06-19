const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    nombre: { 
        type: String,
        required: [true, "Nombre es requerido"]
     },
    correo: { 
        type: String,
        required:  [true, "Correo es requerido"]
    },
    contrasena: {
        type: String,
        required: [true, "Contraseña es requerida"]
     }
}, 
    { timestamps: true });

module.exports = mongoose.model('User', UserSchema);