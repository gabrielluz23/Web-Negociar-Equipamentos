const user = require('../models/User');
module.exports = {

   async show(req,res){
        const {user_id} = req.headers;
        const User =  await user.find({_id:user_id})
        return res.json(User);
    }
}