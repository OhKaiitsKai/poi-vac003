import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
//import CryptoJS from "crypto-js";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  //const [enc, setEnc]= useState(false);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  //const encdec = async() => { 
  //if(enc){
    //var ciphertext = CryptoJS.AES.encrypt(message.text, 'miClave').toString();
    //setEnc(true);
    //return ciphertext;
//}
  //else{
    //var bytes = CryptoJS.AES.decrypt(message.text, 'miClave');
    //var decryptedData =bytes.toString(CryptoJS.enc.Utf8);
    //setEnc(false);
    //return decryptedData;
  //}
//}

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>Justo ahora</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;