const Equipamento = require('../models/Equipamento');
const User = require('../models/User');

module.exports = {
    async index(req,res){
        const equipamentos = await Equipamento.find({});
        return res.json(equipamentos);
    },
}