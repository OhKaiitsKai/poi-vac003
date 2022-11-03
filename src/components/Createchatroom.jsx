import React, {useEffect, useState} from 'react';
import Createroom from '../img/room.png';
//import { AuthContext } from "../context/AuthContext";
//import { ChatContext } from "../context/ChatContext";
//import { doc, setDoc } from "firebase/firestore";
//import {db} from './firebase';
//import {Link} from 'react-router-dom';

const Createchatroom = () => {
  //const [messages, setMessages] = useState([]);
  //const { data } = useContext(ChatContext);
  //const { currentUser } = useContext(AuthContext);
  //const { dispatch } = useContext(ChatContext);

  const roomName = prompt("Por favor, ingrese un nombre para la sala:");

  //      if(roomName){
    //        db.collection("rooms").add({
      //          name: roomName
        //    })
        //}
    return (
        <div className='chatroom'>
         <img src={Createroom} alt=''/> 
         <div className='roomtxt'>
         <span>Crear sala</span>
         </div>
        </div>
    )
}

export default Createchatroom;