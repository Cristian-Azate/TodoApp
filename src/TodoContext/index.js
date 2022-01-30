import React from "react";
import { useLocalStorage } from "./useLocalStorage";
//ENVOLVEMOS LA APLICACION EN EL PROVIDER
//CONSUMER USAREMOS CUANDO NECESITEMOS INFORMACION DE ESE ESTADO COMPARTIDO

//crear contextos son las herramientas NOS daran los providers y consumers 
//PARA COMPARTIR EL ESTADO POR TODOS LOS COMPONENTES
//ES UN OBJETO sacamos su propiedad provider y consumer
//const {Provider,Consumer} = React.createContext(); 

const TodoContext = React.createContext(); 
//este componente va a envolver a toda la aplicacion
//necesitamos que el componente tenga por dentro a cualquier componete por eso props.children
//TIENE TODA LA LOGICA DE LA APP -
function TodoProvider(props){


//-------------------------------------------------------------
//-----------------LOGICA DEL LA APP-------------------
//------------------------------------------------------------

  //llamamos nuestra custom hook -- aqui ya actualiza y guarda en local storage y elVALOR INICIAL ->array vacio
  //llamamos a localstorage y decimos que ese valor es igual a todos y para cambiar valor es la funcion savedTodos
  //const [todos,savedTodos] = useLocalStorage('TODOS_V1',[]); //GUARDO EN LOCAL STOGARE CON EL NOMBRE "TODOS V1"
  const {
    item:todos, //lo renombro a todos proque asi lo autilizaba antes
    savedItem:savedTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);

  //! es falso !!negacion del falso
  //completedTodos --- cuento los que estan completos FILTRANDO EL ARRAY 

  //USESTATE DEVUELVE UN ARRAY --1ra posicion es el valor --2do una funcion para cambiar el estados (AXTUALIZARLOS)
  //usestate sera nombre todo sera igual al listado de todos transformados de localstorage
  
  //valor inicial sera vacio de la barra de busqueda
  const [searchValue,setsearchValue]=React.useState('');

  //estado del modal --> por defecto el modal no estar abierto
  const [openModal,setOpenModal]=React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos=[];
//si no escribio nada es igual a TODOS los todos
  if (!searchValue.length>=1){
    searchedTodos=todos
  }
  //recorro el listado de TODOS y los paso a minuscula y comparo con el valor del input de busqueda en minuscula tambien
  else{
      searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    });   
  }

  //CUANDO COMPLETO TODO EN LA APP DEBO GUARDAR EN LOCARLSTORAGE SINO SE PIERDEN LOS DATOS

//Agregar TODO cuando reciba un texto
const addTodo = (text) =>{
  const newTodos=[...todos];
  newTodos.push({
    completed:false,
    text,
  });
 
  
  //setTodos(newTodos); // actualizo el estado mediante su funcion //LO SACO PARA LOCAL STORAGE AHORA
  savedTodos(newTodos);
}

 
  //Completar TODO cuando reciba un texto
  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text===text)
    const newTodos=[...todos];
    newTodos[todoIndex].complete=true;
    //o TAMBIEN
    //todos[todoIndex] ={
    //   text: todos[todoIndex].text,
    //   completed: true
    // }
    
    //setTodos(newTodos); // actualizo el estado mediante su funcion //LO SACO PARA LOCAL STORAGE AHORA
    savedTodos(newTodos);
  }

   //Delete TODO cuando reciba un texto
  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text===text)
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1)
    //setTodos(newTodos); // actualizo el estado mediante su funcion // //LO SACO PARA LOCAL STORAGE AHORA
    savedTodos(newTodos);
  }

  
  //esto se ejecuta antes de renderizar
  //ejecuta con ciertas condiciones para que lo haga o no
 // React.useEffect(()=>{
 //   console.log('useeffect');
 // },[totalTodos]); // el array vacio [] es la condicion SOLO 1 VEZ
                    // escuchara cuando haya cambios en totalTodos

    return(
        //decir que estado o propiedades vamos a compartir =>value que es un objto{{}}
        //dar cada propieda,metodos,atributos a nuestro value para COMPARTIR CON PROVIDER
        //envolvemos todo esto en props.children a TODO LO QUE MANDEMOS o EXPORTAMOS
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setsearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
             {props.children}
        </TodoContext.Provider>
    );
}

export{TodoContext,TodoProvider};