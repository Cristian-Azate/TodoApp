import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext"; 
import {Modal} from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";


//los elementos(en esta caso son componentes) deben estar contenidos en 1 sola etiqueta
//React Fragment cuando tengamos varias etiquetas o componentes DENTRO DE 1 COMPONENTE
//                no los pone en un div sino van los elementos sueltos ya que es UNA ETIQUETA INVISIBLE

function AppUI() {
    //*UTILIZAREMOS EL ESTADO GUARDADO EN NUESTRO CONTEXO --->value {error,loading} -- las propiedades que vamos a utilizar--lo sace al usar el hook*/}
    //usamos un react hook // ya saco TodoContext.Consumer
    //propiedad que traigo de contexto
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }=React.useContext(TodoContext) 

    return (
        <React.Fragment>
        {/*-React.Fragment es un componente- si tuviera muchos divs --ya que se deberia tener un div(etiqueta) por componente */}
        <TodoCounter/>
  
        <TodoSearch/>

        {/*UTILIZAREMOS EL ESTADO GUARDADO EN NUESTRO CONTEXO --->value {error,loading} -- las propiedades que vamos a utilizar--lo sace al usar el hook*/}
        {/*RENDER PROPS  -- ya no usaremos el html y los props como TODOLIST---lo sace al usar el hook*/}
         {/*--USAREMOS/ENVIAREMOS UNA FUNCION  --- EN LUGAR DE LOS COMPONENTES--lo sace al usar el hook*/}
         {/*-- le mando la lista de todos y por cada elemento todo renderizo todoitem  ----key = es para identificar cada elemento del*/}
         {/*--key = es para identificar cada elemento del*/}
         {/* --AHORA EL TODO LIST-- se filtra por en funcion de lo que se escriba en el searchvalue */}
         {/* * --onComplete ES un ARROW FUNCTION */}
         <TodoList> 
               {/*AGREGAREMOS 3 ESTADOS--CARGANDO --ERROR -- TODO ESTA BIEN  --- && --ENTONCES*/}
               {error && <TodosError error={error}/>}
               {loading && <TodosLoading/>}
               {(!loading && !searchedTodos.lenght) && <EmptyTodos/>} 
               

               {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.complete}
                  onComplete={()=> completeTodo(todo.text)}
                  onDelete={()=> deleteTodo(todo.text)}
                />
               ))}
         </TodoList> 
        
         {/*A PESAR DE ESTAR EN DIV ROOT ESTO SE RENDERIZA EN EL DIV MODAL*/}
         {/*Preguntamos si openmODAL ES TRUE -- si si */}
         
         {!!openModal && (
          <Modal>
             <TodoForm/>
          </Modal>
         )}

         {/*A esa funcion le mandamos para llamar al actualizador del esstado del modal*/}  
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
}

export { AppUI}