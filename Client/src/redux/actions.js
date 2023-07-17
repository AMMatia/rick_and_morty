import { ADD_FAV,REMOVE_FAV,FILTER, ORDER } from "./type"

const addFav = (character)=>({
    type: ADD_FAV,
    payload: character
})

const removeFav = (id)=>({
    type: REMOVE_FAV,
    payload: id,
})

const filterCards = (gender)=>({
    type: FILTER,
    payload: gender,
})

const orderCards = (orden)=>({
    type: ORDER,
    payload: orden,
})

export {addFav,removeFav,orderCards,filterCards}