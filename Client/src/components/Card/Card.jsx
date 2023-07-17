import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'

export function Card(props) {
   const [isFav,setIsFav] = useState(false)
   
   const handleFavorite = ()=>{
      if(isFav) {
         setIsFav(false)
         props.removeFav(props.id)}
      else {
         const isAlreadyFav = props.myFavorites.find((fav) => fav.id === props.id);
         if (!isAlreadyFav) {
            props.addFav(props);
            setIsFav(true);
         }
      }
  }
   
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={styles.divission}>
         
         
         <img src={props.image} alt='' className={styles.imagen}/>
         {
            isFav ? (
               <button onClick={handleFavorite} className={styles.botonf}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={styles.botonf}>🤍</button>
            )
         }
         
         <button className={styles.botonx} onClick={()=>props.onClose(props.id)}>X</button>
         
         <Link to={`/detail/${props.id}`}>
            
            <h2 className={styles.nombre}>{props.name}</h2>
         
         
         <div className={styles.titulos}>
            <h2>{props.status}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.species}</h2>
            <h2>{props.origin}</h2>
         </div>
         </Link>
         
         
      
      </div>
   );
}

export function mapDispatchToProps (dispatch){
   return {
      addFav:(character)=>dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id)),
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);