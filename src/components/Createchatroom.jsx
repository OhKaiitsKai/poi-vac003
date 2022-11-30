import React, {Component, useContext, useEffect, useState} from 'react';
import Createroom from '../img/room.png';
import AddMembers from './AddMembers';
import { AuthContext } from "../context/AuthContext";
import { getStorage, ref } from "firebase/storage";
//import { ChatContext } from "../context/ChatContext";
import { collection,
  query,
  where,
  getDocs,
  doc, 
  setDoc, 
  updateDoc, 
  Timestamp,
  serverTimestamp,
getDoc } from "firebase/firestore";
import {db} from '../firebase';
import { v4 as uuid } from "uuid";

const Createchatroom = () => {
  const { currentUser } = useContext(AuthContext);
  //const { data } = useContext(ChatContext);
  const [modalOpen, setModalOpen] = useState(false);

    
  const roomName= async()=>{
    const setRoom = prompt("Por favor, ingrese un nombre para la sala:");
    if (setRoom){
      //Create new room
      const roomid= uuid();
     // const storage = getStorage();
     // const perfilImagesRef = ref(storage, '../img/perfil1');
      await setDoc(doc(db, "Room", roomid), {
        uid: roomid,
        nameroom: setRoom,
        Creationdate: Timestamp.now(),
       // photoURL: perfilImagesRef,
        members: [],
      });
    }
  }; 
  
    return (
        <div onClick={roomName} className="chatroom">
         <img src={Createroom} alt=""/> 
         <div className="roomtxt">
         <span>Crear sala</span>
         </div>
         {modalOpen && <AddMembers setOpenModal={setModalOpen} />}
        </div>
    )
}

export default Createchatroom;