import { ADD_FAV,REMOVE_FAV,FILTER, ORDER } from "./type"
import axios from 'axios'


const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };
// const addFav = (character)=>({
//     type: ADD_FAV,
//     payload: character
// })

const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
            type: REMOVE_FAV,
            payload: data,
       });
       });
    };
 };

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