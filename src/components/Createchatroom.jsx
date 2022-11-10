import React, {useEffect, useState} from 'react';
import Createroom from '../img/room.png';
//import { AuthContext } from "../context/AuthContext";
//import { ChatContext } from "../context/ChatContext";
import { doc, setDoc } from "firebase/firestore";
import {db} from '../firebase';
//import {Link} from 'react-router-dom';

const Createchatroom = () => {
const [croom, setCroom]= useState([]);

  const roomName=()=>{
    const setRoom = prompt("Por favor, ingrese un nombre para la sala:");
    setCroom(setRoom);
    if (setRoom){
    
    }
  } 



    return (
        <div onClick={roomName}className='chatroom'>
         <img src={Createroom} alt=''/> 
         <div className='roomtxt'>
         <span>Crear sala</span>
         </div>
        </div>
    )
}

export default Createchatroom;