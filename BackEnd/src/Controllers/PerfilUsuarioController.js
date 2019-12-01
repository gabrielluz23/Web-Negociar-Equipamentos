const Equipamento = require('../models/Equipamento');
module.exports = {

   async show(req,res){
        const {user_id} = req.headers;
        const equipamentos =  await Equipamento.find({user:user_id})
        return res.json(equipamentos);
    }
}