import React, {useContext, useState} from 'react';
import Createroom from '../img/room.png';
import { AuthContext } from "../context/AuthContext";
//import { ChatContext } from "../context/ChatContext";
import { doc, setDoc, updateDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase';
import { v4 as uuid } from "uuid";
//import {Link} from 'react-router-dom';

const Createchatroom = () => {
  const { currentUser } = useContext(AuthContext);
  //const { data } = useContext(ChatContext);

  const roomName= async()=>{
    const setRoom = prompt("Por favor, ingrese un nombre para la sala:");
    if (setRoom){
      //Create new room
      const roomid= uuid();
      await setDoc(doc(db, "Room", roomid), {
        id: roomid,
        nameroom: setRoom,
        Creationdate: Timestamp.now(),
        members: [],
      });
      //create a chat in chats collection
      await setDoc(doc(db, "chats", roomid), { messages: [] });
      //create user chats
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [roomid+ ".userInfo"]: {
          nameroom: setRoom,
          Creationdate: Timestamp.now(),
        },
        [roomid + ".date"]: serverTimestamp(),
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