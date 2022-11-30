import React from 'react';
import "./Modal.scss";
import AsyncSelect from 'react-select/async';
import { collection, query, orderBy, startAt, endAt, getDocs } from "firebase/firestore";
import {db} from '../firebase';

function AddMembers({ setOpenModal }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Agregar integrantes</h1>
          </div>
          <div className="body">
            <p>Selecciona a los nuevos integrantes</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancelar
            </button>
            <button>Agregar</button>
          </div>
        </div>
      </div>
    );
  }


export default AddMembers;