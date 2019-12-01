const Negociar = require('../models/Negocios');
module.exports = {
    async store(req,res){
        const {user_id} = req.headers;
        const {equip_id} = req.params;
        const {date} = req.body;
    
  const negocio = await Negociar.create({
      user: user_id,
      equipamento: equip_id,
      date,
  });
  await negocio.populate('user').populate('equipamento').execPopulate();
  return res.json(negocio);
}
}