const mongoose = require('mongoose');

const documentoSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    tipo: String,
    editorial: String,
    edicion: String,
    anodeedicion: Number,
    categoria: String,
    ejemplares: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ejemplar'}]
    
})

module.exports = mongoose.model('Documento', documentoSchema);