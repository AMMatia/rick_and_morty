const axios = require ('axios')


const getCharById = (res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(( { data } )=>{
        let char = {
            id:id,
            name:data.name,
            status:data.status,
            species:data.species,
            gender:data.gender,
            origin:data.origin.name,
            image:data.image
        }
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(char))
    })
    .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
}

module.exports = getCharById;