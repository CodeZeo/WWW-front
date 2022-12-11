const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
    usuario: {type: mongoose.Schema.Types.ObjectId,ref: 'Usuario'},
    ejemplar: {type: mongoose.Schema.Types.ObjectId, ref: 'Ejemplar'},
    adomicilio: Boolean,
    fechaprestamo: mongoose.Schema.Types.Date,
    tiempodevolucionindicado: mongoose.Schema.Types.Date,
    tiempodevolucionefectivo: mongoose.Schema.Types.Date,
    recordatorio: mongoose.Schema.Types.Date,
    mora: Boolean,
})

module.exports = mongoose.model('Prestamo', prestamoSchema);

