import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//este es el nodo donde se renderiza la app principal
ReactDOM.render(
   <App />,
  document.getElementById("root")
);

//creo un nuevo nodo
// ya no renderizo en el mismo nodo root sino en otro
//esto nodo me permite pasar nuestro componentes a este --- NUEVO NODO ---
//----PODEMOS COMUNICAR NUESTROS COMPONENTES EN OTRO NODO (entre si)-- enviar propiedad, cambios de estado


//LO VOY A LLEMAR DESDE OTRO COMPONENTE ---> DENTRO DE NUESTRA APLICACION APP QUE ESTAMOS RENDERIZANDO

//ReactDOM.createPortal(
//  <App />,
// document.getElementById("modal")
//);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
