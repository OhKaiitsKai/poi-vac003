import React from 'react'

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VACChatApp</span>
                <span className="title">Iniciar sesión</span>
                <form>
                    <input type="e-mail" placeholder="e-mail"/>
                    <input type="password" placeholder="Contraseña"/>
                    <button>Ingresar</button>
                    <p>¿No tienes cuenta? Regístrate aquí.</p>
                </form>
            </div>
        </div>
    )
}

export default Login 