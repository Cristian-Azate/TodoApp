//AQUI ESTARA SOLO LA LOGICA DE NUESTRA APLICACION (Y AHORA TAMBIEN TIENE LA DEL LOCALSTORAGE--- ya la separe TodoContext)
//LLAMAMOS UN UNICO COMPONENETE EL QUE TIENE TODA LA UI DE LA APP


//import "./App.css"; Ya que tengo React Fragmente y solo tengo componentes nada de etiquetas
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";





function App() {

  
  return (
   <TodoProvider>
    <AppUI/>
   </TodoProvider>

   
  );
}

export default App;
