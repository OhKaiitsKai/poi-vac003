import React, {useContext, useState} from 'react';
import Createroom from '../img/room.png';
//import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import {db} from '../firebase';
import { v4 as uuid } from "uuid";
//import {Link} from 'react-router-dom';

const Createchatroom = () => {
const { data } = useContext(ChatContext);

  const roomName= async()=>{
    const setRoom = prompt("Por favor, ingrese un nombre para la sala:");
    if (setRoom){
      //Create new room
      await setDoc(doc(db, "Room", data.chatId), {
        id: uuid(),
        newroom: setRoom,
        Creationdate: Timestamp.now(),
      });
    }
  } 

    return (
        <div onClick={roomName} className="chatroom">
         <img src={Createroom} alt=""/> 
         <div className="roomtxt">
         <span>Crear sala</span>
         </div>
        </div>
    )
}

export default Createchatroom;