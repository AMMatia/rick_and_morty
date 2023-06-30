import { ADD_FAV,FILTER,ORDER,REMOVE_FAV,  } from "./type"

const initialState = {
    myFavorites:[],
    allCharacters:[],
}

const rootReducer = (state = initialState,action)=>{
    switch (action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload], // Agregar el nuevo personaje solo a myFavorites
                allCharacters: [...state.allCharacters, action.payload],
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character)=> character.id !== Number (action.payload))
            }

        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter((character)=> character.gender === action.payload)
            }
        
        case ORDER:
            return{
                ...state,
                myFavorites:state.allCharacters.sort((a, b) => (action.payload === 'A' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
            }
        
        default:
            return {...state}
    }
}
export default rootReducer;