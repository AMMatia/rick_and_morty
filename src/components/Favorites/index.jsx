import Card from '../Card/Card';
import styles from '../Card/Card.module.css'
import { connect } from 'react-redux';

export  function Favorites(props){

    if (!props.myFavorites || props.myFavorites.length === 0) {
        return <p>No hay favoritos</p>;
     }
    
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
                origin={char.origin.name}
                image={char.image}
                onClose={props.onClose}
                />
                ))}
            </div>
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites,
    }
 }
 
 export default connect(mapStateToProps, null)(Favorites);
 

