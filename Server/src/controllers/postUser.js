const {User} = require ('../DB_connection')

const postUser = async (req,res)=>{
    const { email, password } = req.body;
    
    try {
        if(!email || !password) res.status(400).send('Faltan datos')
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: { password }
        });

        if (created) {
            return res.status(201).json(user);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }

}
module.exports = postUser;