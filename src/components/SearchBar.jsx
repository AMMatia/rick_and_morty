import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { filterCards,orderCards } from '../redux/actions';
import {connect} from 'react-redux'
import { useLocation } from 'react-router-dom';
import styles from '../components/Card/Card.module.css'

export function SearchBar(props) {
   const [id,setId] = useState('')
   const handleChange = (event)=> setId(event.target.value)
   

   const handleRandomId = () => {
      const random = Math.floor(Math.random() * 826) + 1;
      setId(random.toString());
    };

   const handleKeyPress = (event) => {
      if (event.key === "Enter") props.onSearch(id);
   };

   const dispatch = useDispatch()

   const [aux,setAux] = useState(false)

   const handleOrder = (event)=>{
       dispatch(orderCards(event.target.value))
       setAux(!aux)
   }

   const handleFilter = (event)=>{
       dispatch(filterCards(event.target.value))
   }

   const location = useLocation();
   console.log(props.myFavorites)
   return (
      <div className={styles.navBotones}>
         <button onClick={handleRandomId}>Random ID</button>
         <input type='search' value={id} onChange={handleChange} onKeyPress={handleKeyPress}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
         {location.pathname === '/favorites' &&(
            <div className={styles.selectContain}>
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
            </div>)
         }
         
      </div>
   );
}

export function mapStateToProps(state){
   return{
       myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, null)(SearchBar);
