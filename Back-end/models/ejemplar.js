const mongoose = require('mongoose');

const ejemplarSchema = new mongoose.Schema({
    documento: {type: mongoose.Schema.Types.ObjectId, ref: 'Documento'},
    estado: String,
    ubicacion: String,

})

module.exports = mongoose.model('Ejemplar', ejemplarSchema);