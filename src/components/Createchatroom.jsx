import React, {useState} from 'react';
import Createroom from '../img/room.png';
import defaultImg from '../img/perfil1.jpg'
import AddMembers from './AddMembers';
//import { AuthContext } from "../context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { ChatContext } from "../context/ChatContext";
import {
  doc, 
  setDoc, 
  Timestamp } from "firebase/firestore";
import {db, storage} from '../firebase';
import { v4 as uuid } from "uuid";


const Createchatroom = () => {
  //const { currentUser } = useContext(AuthContext);
  //const { data } = useContext(ChatContext);
  const [modalOpen, setModalOpen] = useState(false);
  const file= defaultImg;
    
  const roomName= async()=>{
    const setRoom = prompt("Por favor, ingrese un nombre para la sala:");
    if (setRoom){
      const date = new Date().getTime();
      const storageRef = ref(storage, `${setRoom + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
      //Create new room
      const roomid= uuid();
      await setDoc(doc(db, "Room", roomid), {
        uid: roomid,
        nameroom: setRoom,
        Creationdate: Timestamp.now(),
        photoURL: downloadURL,
        members: [],
      });
      //create chats for room
      ///await setDoc(doc(db, "chats", roomid), { messages: [] });
    });
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