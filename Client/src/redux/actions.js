import { ADD_FAV,REMOVE_FAV,FILTER, ORDER } from "./type"
import axios from 'axios'


const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try{
         const {data} = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,

      })}catch(error){
         window.alert(error.message)
      }
      
      //  .then(({ data }) => {
      //    return dispatch({
      //       type: ADD_FAV,
      //       payload: data,
      //    });
      // });
    };
 };
// const addFav = (character)=>({
//     type: ADD_FAV,
//     payload: character
// })

const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      const {data} = await axios.delete(endpoint)
      try{
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         })}catch(error){
            window.alert(error.message)
      }
      
   //    .then(({ data }) => {
   //        return dispatch({
   //          type: REMOVE_FAV,
   //          payload: data,
   //     });
   //     });
   //  };
 }};

// const removeFav = (id)=>({
//     type: REMOVE_FAV,
//     payload: id,
// })

const filterCards = (gender)=>({
    type: FILTER,
    payload: gender,
})

const orderCards = (orden)=>({
    type: ORDER,
    payload: orden,
})

export {addFav,removeFav,orderCards,filterCards}