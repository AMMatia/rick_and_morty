import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={styles.divission}>
         <div>
         
         <img src={props.image} alt='' className={styles.imagen}/>
         <button className={styles.boton} onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.nombre}>{props.name}</h2>
         </Link>
         
         <div className={styles.titulos}>
            <h2>{props.status}</h2>
            {/* <h2>{props.gender}</h2> */}
            <h2>{props.species}</h2>
         </div>
         
         <h2 className={styles.origen}>{props.origin}</h2>
         
         
         </div>
      </div>
   );
}
