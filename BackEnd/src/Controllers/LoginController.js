
// index,show,store,update,destroy
// index = lista, show = unico da lista, store  = criar, update = alterar, destroy = delete
const User = require('../models/User');


module.exports = {
 async store(req,res){
   const {email} = req.body;
   const {senha} = req.body;
    let user = await User.findOne({email,senha});
    if(!user){
  return res.json("usuario Não Existe ou Senha/Email invalidos");
}
   return res.json(user);
}
};