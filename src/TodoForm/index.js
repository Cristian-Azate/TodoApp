import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

//creamos nuestro componente

function TodoForm(){
    //ACTUALIZO ESTADO--escuchar el evento ONCHANGE  del texarea asi guardo el TEXTO DEL TODO 
    const[newTodoValue,setNewTodoValue] = React.useState('');

    //importamos la funcion de Todocontext
    const{
     addTodo,
     setOpenModal,
    }=React.useContext(TodoContext)


    //funciones dentro del elemento
    const onCancel = () =>{
        setOpenModal(false);
    };

    //este evento de envio el formulario -- ES DECIR RECARGA LA PAGINA
    const onSubmit = (event) =>{
        event.preventDefault() //NO RECARGA LA PAGINA
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    //cada vez que escriban en el textarea llama esta funcion
    //recibo el evento
    const onChange = (event) =>{
      setNewTodoValue(event.target.value)
      //AQUI CAMBIO EL ESTADO
    };

    //evento para button onclick
    //al boton le cambio el type submit para recibir el evento submit--- el evento envio de nuetro formulario--- este EVENTO EN GENERAL RECARGA LA PAGINA
    return (

        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escriba la nueva Tarea"

            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
            
        </form>
    );
}
export {TodoForm};