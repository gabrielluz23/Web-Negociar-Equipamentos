
// index,show,store,update,destroy
// index = lista, show = unico da lista, store  = criar, update = alterar, destroy = delete
const User = require('../models/User');


module.exports = {
 async store(req,res){
   const {email} = req.body;
   const {nome} = req.body;
   const {senha} = req.body;
   const {telefone} = req.body;
    let user = await User.findOne({email});
    if(!user){
   user =await User.create({email,nome,senha,telefone});
}
   return res.json(user);
},
async Index(req,res){
   const usuario = await User.find({});
   return res.json(usuario);
}
};