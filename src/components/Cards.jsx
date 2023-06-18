import Card from './Card/Card';

export default function Cards(props) {
   return <div>
      <ul>
         {props.characters.map((char)=>(
            < Card
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={props.onClose}
            />
            )
         )}
      </ul>
   </div>;
}
