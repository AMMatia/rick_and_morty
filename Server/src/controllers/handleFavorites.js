// let myFavorite = [];


const postFav = (req,res)=>{
    const { id,name,image,gender} = req.body;
    const char = {id,name,image,gender}
    // const id = char.id
    // const isAlreadyFav = myFavorite.some((fav) => fav.id === id);
    // if (isAlreadyFav) {
    //     return res.status(200).send('Ya se encuentra en favoritos')
    // }else{
        // myFavorite.push(char);
        // console.log('controlermy',myFavorite)
               
    
    return res.status(200).json(char)
}

const deleteFav = (req,res)=>{
    const id = req.params.id;
    // const favIndex = myFavorite.findIndex((fav) => fav.id === id);
    // if (favIndex !== -1) {
    //   myFavorite.splice(favIndex, 1);
    // }
    return res.status(200).json(id);
  }

//     const favs = myFavorites.filter(fav=> fav.id !== id);
//     return res.status(200).json(favs);


module.exports = {postFav,deleteFav};