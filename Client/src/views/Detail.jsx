import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './Details.module.css'

export default function Detail(){
    const {id} = useParams()
    const [character, setCharacter] = useState({}) 
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
     return (
        <div>
            {character.name &&(
                <div className={styles.detailTipo}>
                    <div>
                        <h1 className={styles.name}>{character.name}</h1>
                        <img className={styles.imagen} src={character.image} alt={character.name} />

                    </div>
                    <div className={styles.detailDatos}>
                        <h2>Estado: {character.status}</h2>
                        <h2>Especie: {character.species}</h2>
                        <h2>Género: {character.gender}</h2>
                        <h2>Origen: {character.origin.name}</h2>
                    </div>
                </div>
            )}
            
        </div>
    )
}