const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    ejemplar: {type: mongoose.Schema.Types.ObjectId, ref: 'Ejemplar'},
    fecha: mongoose.Schema.Types.Date,
    usuario: {type: mongoose.Schema.Types.ObjectId,ref: 'Usuario'},
    estado: String,
    prestamo: {type: mongoose.Schema.Types.ObjectId,ref: 'Prestamo'},

    
})

module.exports = mongoose.model('Reserva', reservaSchema);