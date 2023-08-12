// const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharById = async (req,res)=>{
    const id = req.params.id
    
    try{
        const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        character = {
            id:id,
            name:data.name,
            status:data.status,
            species:data.species,
            gender:data.gender,
            origin:data.origin.name,
            image:data.image
        }
        return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = getCharById;



module.exports = getCharById;