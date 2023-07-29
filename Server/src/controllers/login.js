const users = require('../utils/users')

module.exports = (req,res)=>{
    const email = req.query.email;
    const password = req.query.password;

    const verif = users.find(users=>users.email===email && users.password===password)

    if(verif){
        return res.status(200).json({ access: true })
    } else{
        return res.status(200).json({ access: false })
    }
}  
