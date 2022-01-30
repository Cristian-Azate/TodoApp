import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import "./TodoIcon.css";

//crear un objeto con todos los íconos que nuestro componente puede mostrar
const iconTypes = {
    "check": color => (
      <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
      <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
  };

//propiedades pueden necesitar nuestros íconos, yo elegí las siguientes:
//type: para seleccionar qué ícono svg vamos a mostrar.
//color: para seleccionar el color de nuestro ícono svg, por defecto será gray.
//onClick:para invocar alguna función cuando le demos click al contenedor de nuestro ícono.

//CheckSVG cuando la prop type tenga el valor check 
//DeleteSVG cuando tenga el valor delete.

  function TodoIcon({ type, color = 'gray', onClick }) {
    return( 
    <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
    >
        {/*Aqui va el SVG*/}
        {/*envolvemos nuestros íconos dentro de funciones vamos a poder enviarles propiedades que cambien su presentación o comportamiento. */}
        {iconTypes[type](color)}
    </span>
    );
}

export {TodoIcon}

//Cada vez que llamamos a nuestro ícono debemos enviar varias props. 
//AHORA crearamos un componente que envíe todas esas props por nosotros?
//CompleteIcon y DeleteIcon