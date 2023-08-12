const {Favorite} = require('../models/Favorite');

const postFav = async (req,res)=>{
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
    
        if (!id || !name || !origin || !status || !image || !species || !gender)
          return res.status(401).json({ error: 'Faltan datos' });
    
        await Favorite.findOrCreate({
          where: { id, name, origin, status, image, species, gender },
        });
      
          const allFavorites = await Favorite.findAll();
          return res.status(201).json(allFavorites);

    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = postFav;