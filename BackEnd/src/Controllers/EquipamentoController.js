const Equipamento = require('../models/Equipamento');
const User = require('../models/User');

module.exports = {
    async index(req,res){
        const {categoria} = req.query;
        const equipamentos = await Equipamento.find({categorias:categoria});
        return res.json(equipamentos);
    },
    async store(req,res){
        const {filename} = req.file;
        const {titulo,descricao,valor,categorias} = req.body;
        const {user_id} = req.headers;
        const user =await User.findById(user_id);
        if(!user){
            return res.status(400).json({error : 'usuario não existe'})
        }

        const equipamento = await Equipamento.create({
            user: user_id,
            imagemEquip : filename,
            titulo,
            descricao,
            valor,
            categorias : categorias.split(',').map(categoria =>categoria.trim())

        })
 return res.json(equipamento)
    },
    async destroy(req,res) {
        const{id} = req.query;
        const  equipamento =await Equipamento.find({_id:id}).deleteOne();
        return res.json(equipamento)
    }

}