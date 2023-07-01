import Card from '../Card/Card';
import styles from '../Card/Card.module.css'

export default function Cards(props) {
   return <div className={styles.cardContainer}>
      
         {props.characters.map((char,index)=>(
            < Card
            key={index}
            id={char.id}
            name={char.name}
            // status={char.status}
            // species={char.species}
            // gender={char.gender}
            // origin={char.origin.name}
            image={char.image}
            onClose={props.onClose}
            />
            )
         )}
   
   </div>;
}