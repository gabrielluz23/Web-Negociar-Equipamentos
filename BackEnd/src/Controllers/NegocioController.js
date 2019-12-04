const Negociar = require('../models/Equipamento');
module.exports = {
    async show(req,res){
        const {equip_id} = req.query;
        const negocio =await Negociar.find({_id:equip_id})
  return res.json(negocio);
}
}