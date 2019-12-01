const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: String,
    nome: String,
    senha: Number,
    telefone: Number,

})
module.exports = mongoose.model('Usuarios',UserSchema);