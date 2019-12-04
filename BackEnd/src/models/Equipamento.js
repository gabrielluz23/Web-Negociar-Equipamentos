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
}, {
    toJSON: {
        virtuals: true,
    },
});
EquipamentoSchema.virtual('imagemEquip_url').get(function() {
    return `http://192.168.11.13:3333/files/${this.imagemEquip}`
})
module.exports = mongoose.model('Equipamento',EquipamentoSchema);