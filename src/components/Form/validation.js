
export default function validation(userData){
    const regexE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexP = /^(?=.*\d).+/;
    const passLength = userData.password.length
    const errors = {};

    if(!userData.email) errors.email = 'Se requiere nombre de usuario';
    else if(userData.email.length > 35) errors.email = 'El nombre no puede contener más de 35 caracteres';
    else if(!regexE.test(userData.email)) errors.email = 'El nombre de usuario debe ser un email válido';

    if(passLength < 6 || passLength > 10) errors.password = 'La contraseña debe tener una long. entre 6 y 10 caracteres'
    else if(!regexP.test(userData.password)) errors.password = 'La contraseña debe contener al menos un número';

    return errors;
}