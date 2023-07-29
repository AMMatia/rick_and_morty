import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav';
import axios from 'axios'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './views/About';
import Detail from './views/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites';
import styles from './background/style.module.css'

function App() {
   
   const [characters, setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
   // const EMAIL = 'prueba@gmail.com';
   // const PASSWORD = '123prueba';
   const navigate = useNavigate();
   const URL = 'http://localhost:3001/rickandmorty/';

   function login({ email, password }) {
      axios(URL + `login?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
          const  existeChar = characters.some((char) => char.id === data.id);
          
          if (existeChar) {
            window.alert('¡Este personaje ya está en la lista!');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
            window.alert('¡No hay personajes con este ID!');
        }
      });
    }
   const onClose = (id)=>{
      setCharacters((oldChars)=>oldChars.filter((char) => char.id!==id));
   }

   const location = useLocation();
   return (
      
      <div className={styles.appcontainer}>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         
            <Routes>
            <Route path='/' element={<Form login = {login}/>}/>
            <Route path='/home' element={<Cards characters = {characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
         
         
      </div>
   );
}

export default App;
