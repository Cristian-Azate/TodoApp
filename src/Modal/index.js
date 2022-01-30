import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

//creo el componenete como cualquier otro
//no retorno etiquetas o elementos o componentes de html 
//children --->no lo hace especifico sino reutilizado para enviar lo que quieras a nuestro modal ej formulario,alerta de error
function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        {children}
      </div>,
      document.getElementById('modal')
    );
  }
  
  export { Modal };