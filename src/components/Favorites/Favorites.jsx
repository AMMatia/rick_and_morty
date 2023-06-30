import {connect} from 'react-redux'
import Card from '../Card/Card';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { filterCards,orderCards } from '../../redux/actions';

export function Favorites(props){
    const dispatch = useDispatch()

    const [aux,setAux] = useState(false)

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    
    return(
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value='A'>Ascendente</option>
                    <option value='D'>Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>

            {props.myFavorites.map((char,index)=>(
            < Card
            key={index}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={props.onClose}
            />
            ))}
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);