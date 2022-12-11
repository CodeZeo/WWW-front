const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
    ejemplar: {type: mongoose.Schema.Types.ObjectId, ref: 'Ejemplar'},
    fecha: mongoose.Schema.Types.Date,
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    estado: String,
    prestamo: {type: mongoose.Schema.Types.ObjectId, ref: 'Prestamo'}
})

module.exports = mongoose.model('Solicitud', solicitudSchema);