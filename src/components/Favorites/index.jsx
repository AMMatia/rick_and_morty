import Card from '../Card/Card';
import styles from '../Card/Card.module.css'
import { connect } from 'react-redux';

export  function Favorites(props){

    if (!props.myFavorites || props.myFavorites.length === 0) {
        return <p>No hay favoritos</p>;
     }
    
    return(
        <div style={{position:'relative',flexDirection: 'column'}}>
            {/* <div className={styles.selectContain}>
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
            </div> */}
            <div className={styles.cardContainer}>
                {props.myFavorites.map((char,index)=>(
                < Card
                key={index}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                // origin={char.origin.name}
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
 

