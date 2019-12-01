const mongoose = require('mongoose');

const EquipamentoSchema = new mongoose.Schema({
    imagemEquip: String,
    titulo:String,
    descricao:String,
    valor:Number,
    categorias:[String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});
module.exports = mongoose.model('Equipamento',EquipamentoSchema);