import Card from '../Card/Card';
import styles from '../Card/Card.module.css'
import { connect } from 'react-redux';
import { removeFav } from '../../redux/actions';

export  function Favorites(props){

    if (!props.myFavorites || props.myFavorites.length === 0) {
        return <p>No hay favoritos</p>;
     }
     const handleClose = (id) => {
        props.removeFav(id);
      };
    return(
        <div style={{position:'relative',flexDirection: 'column'}}>
            <div className={styles.cardContainer}>
                {props.myFavorites.map((char)=>(
                < Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                image={char.image}
                onClose={handleClose}
                myFavorites={props.myFavorites}
                />
                ))}
            </div>
        </div>
    )
}
export function mapDispatchToProps (dispatch){
    return {
       removeFav:(id)=>dispatch(removeFav(id)),
    }
 }
export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites,
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
 

