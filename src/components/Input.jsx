import React from 'react'
import Imag from "../img/img.png"
import Attach from "../img/attach.png"

const Input = () => {
    return (
        <div className='input'>
        <input type="text" placeholder='Escribe algo...'/>
        <div className="send">

        <label class="custom-file-upload">
            <img src={Attach} alt="" />
            <input type="file" style= {{diplay:'none'}} id= "file"/>
        </label>   

            <label htmlFor='file'>
                <img src={Imag} alt="" />
            </label>
            <button>Enviar</button>
        </div>
    </div>
    )
}

export default Input 