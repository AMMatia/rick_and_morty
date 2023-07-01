import React, { useState } from "react";
import styles from '../Card/Card.module.css'
import validation from "./validation";


export default function Form(props){
    const [userData,setUserData] = useState({
        email:'',
        password:'',
    })
    
    const [errors,setErrors] = useState({})

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setUserData({
            ...userData,
            [name]: value,
        })

        setErrors(
            validation({
                ...userData,
                [name]: value,
            })
        )
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.login(userData)

    }
    return(
        <form className={styles.formulario}>
 
            <label>Email:</label>
            <input name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && 
            <p className={styles.errormessage}>{errors.email}</p>}
            
            <label>Password:</label>
            <input name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && 
            <p className={styles.errormessage}>{errors.password}</p>}

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )

}