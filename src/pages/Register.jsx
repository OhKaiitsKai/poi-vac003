import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VACChatApp</span>
                <span className="title">Registrarse</span>
                <form>
                    <input type="text" placeholder="Nombre"/>
                    <input type="e-mail" placeholder="e-mail"/>
                    <input type="password" placeholder="Contraseña"/>
                    <input style={{display: "none"}} type="file"  id="file"/>
                    <label htmlFor="file" >
                        <img src={Add} alt="" />
                        <span>Agregar foto de perfil</span>
                         </label>
                    <button>Registrarse</button>
                    <p>¿Ya tienes una cuenta? Inicia sesión</p>
                </form>
            </div>
        </div>
    )
}

export default Register 