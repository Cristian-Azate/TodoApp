import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext"; 

//ONCHANGE devuelve el VALOR DEL INPUT
//setsearch -- searchvalue   actualizamos el valor del ESTADO -cada vez que escribamos en el input

//function TodoSearch({searchValue,setsearchValue}) ---YA NO USO LAS PROPS --AHORA USECONTEXT
function TodoSearch() {
  // lo saco para definirlo en la app padre const [searchValue,setsearchValue]=React.useState('');
  const{searchValue,setsearchValue} =React.useContext(TodoContext)
  const onSearchValueChange = (event)=>{
    console.log(event.target.value);
    setsearchValue(event.target.value)
  };
  return (
    <input 
     className="TodoSearch" 
     placeholder="Buscar" 
     value={searchValue}
     onChange={onSearchValueChange}
    />
  );
}

export {TodoSearch};