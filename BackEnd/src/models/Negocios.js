const mongoose = require('mongoose');

const NegocioSchema = new mongoose.Schema({
   date: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    equipamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipamento'
    }

});
module.exports = mongoose.model('Negocios',NegocioSchema);