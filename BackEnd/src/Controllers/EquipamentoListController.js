const Equipamento = require('../models/Equipamento');

module.exports = {
    async index(req,res){
        
        const {categoria} = req.query;
        if(categoria == null){
            var equipamentos = await Equipamento.find({});
        }
        else {
        var equipamentos = await Equipamento.find({categorias:categoria});
        }
        return res.json(equipamentos);
    },
}