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
    
    // .then(({ data })=>{
    //     character = {
    //                     id:id,
    //                     name:data.name,
    //                     status:data.status,
    //                     species:data.species,
    //                     gender:data.gender,
    //                     origin:data.origin.name,
    //                     image:data.image
    //                 }
    //     return character.name ? res.status(200).json(character) : res.status(404).send('Not found')

    // })
   
    // .catch((err)=>{
    //     res.status(500).send(err.message)
    // })
    
}

module.exports = getCharById;




// const getCharById = (res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(( { data } )=>{
//         let char = {
//             id:id,
//             name:data.name,
//             status:data.status,
//             species:data.species,
//             gender:data.gender,
//             origin:data.origin.name,
//             image:data.image
//         }
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.end(JSON.stringify(char))
//     })
//     .catch((error) => {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end(error.message);
//       });
// }

module.exports = getCharById;