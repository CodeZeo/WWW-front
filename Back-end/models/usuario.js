const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    tipo: String,
    rut: String,
    huelladigital: String,
    correo: String,
    validado: Boolean,
    nombres: String,
    apellidos: String,
    direccion: String,
    telefono: String,
    foto: String,
    ban: Boolean,

})

module.exports = mongoose.model('Usuario', usuarioSchema);