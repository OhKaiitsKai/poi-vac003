import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, storage} from "../firebase";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";


const Register = () => {
    const [err, setErr] = useState (false);
const handleSubmit = async (e)=>{
    e.preventDefault();
    const Nombre= e.target[0].value;
    const email= e.target[1].value;
    const password= e.target[2].value;
    const file= e.target[3].files[0];

    try{
 const res = await createUserWithEmailAndPassword(auth, email, password);

   }catch(err){
    setErr(true);
   }
};

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VACChatApp</span>
                <span className="title">Registrarse</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="Contraseña"/>
                    <input style={{display: "none"}} type="file"  id="file"/>
                    <label htmlFor="file" >
                        <img src={Add} alt="" />
                        <span>Agregar foto de perfil</span>
                         </label>
                    <button>Registrarse</button>
                    {err && <span>Algo salió mal</span>}
                    <p>¿Ya tienes una cuenta? Inicia sesión</p>
                </form>
            </div>
        </div>
    )
}

export default Register 