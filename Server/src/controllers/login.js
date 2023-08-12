const {User} = require("../DB_connection");

const login = async (req,res)=>{
    const {email,password} = req.query;
    
    try {
        if(!email || !password) res.status(400).send('Faltan datos');
       
        const user = await User.findOne( { where: { email } } );
        
        if(!user) res.status(400).send('Usuario no encontrado');
        return user.password === password
        ? res.status(200).json({ access: true })
        : res.status(401).json({ error: 'Contraseña incorrecta' });
      } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = login;