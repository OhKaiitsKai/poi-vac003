import React from 'react'
import Createroom from '../img/room.png'


const Createchatroom = () => {
    return (
        <div className='chatroom'>
         <img src={Createroom} alt=''/> 
         <div className='roomtxt'>
         <span>Crear sala</span>
         </div>
        </div>
    )
}

export default Createchatroom 