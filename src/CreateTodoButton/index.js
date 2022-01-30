import React from "react";
import "./CreateTodoButton.css"

//onClick={()=> console.log('clic')} 
//*ONCLICK es igual a una funcion y es arrow funtion =>  SOLO ASI se ejecutara cuando se realice el evento
//SINO se ejecuta sin esperar el evento  

//GUARDAR la funcion en una constate que es igual a un ARROW FUNCTION =>

//onClick={onClickButton('Mensaje de alerta')} --- SE EJECUTA SIN ESPERAR EL EVENTO
//DEBO PONERLA DENTRO DE OTRO ARROW FUNCTION ----PARA MANDAR PARAMETROS COMO MSG

function CreateTodoButton(props) {
 const onClickButton = () =>{
    //llamamos de nuestras funciones a
    //le mandamaos una funciopn que nos trae el estado del modal --->ARROW FUNCTION
    //AL NEGARLO LE CAMBIO DE ESTADO
    props.setOpenModal(prevState => !prevState);
 };

  return (
   <button 
      className="CreateTodoButton"
      onClick={onClickButton} 
   >
     +
    </button>
  );
}

export { CreateTodoButton };