import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './views/About';
import Detail from './views/Detail';
import Form from './components/Form/Form';

function App() {
   
   const [characters, setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
   const EMAIL = 'prueba@gmail.com';
   const PASSWORD = '123prueba';
   const navigate = useNavigate();

   const login = (userData)=>{
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }

   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
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
      
      <div>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         
         <Routes>
         <Route path='/' element={<Form login = {login}/>}/>
         <Route path='/home' element={<Cards characters = {characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
