import React from "react";

//const defaulttodos = [
//  { text: "cortar cebolla", complete: true },
//  { text: "Tomar curso React", complete: false },
//  { text: "LLorar con la llorona", complete: true },
//];

//custom react hook 
//-------------------------------------------------------------
//-----------------LOGICA DEL LOCAS STORAGE-------------------
//------------------------------------------------------------

//itemname el nombre del elemento que recogeremos y salvaremos
//initial es el vector con los valores -- que puede ser vacio o tiene elementos 
function useLocalStorage(itemName,initialValue){
    //AGREGOS LOS ESTADOS 
    const [loading,setLoading]= React.useState(true); // valor inicial carga
    const [error,setError]= React.useState(false); // valor inicial error
    //del string lo paso a un objeto javascript y se guarda
    const [item,setItem] = React.useState(initialValue);
  
    //simulamos que traemos informacion de una API --- espera 1 segundo y actualiza los ITEM
    //cantidad de tiempo que debe pasar para ejecute la funcion
    React.useEffect(()=>{
      setTimeout(() => {
        try {
            //localstorage.getitem traera solo lo que almacena es decir STRING
            const localStorageItem = localStorage.getItem(itemName);
  
            let parsedItem;
  
            if (!localStorageItem) //si no existe - no crearon todos - usuarios nuevos
            {
              localStorage.setItem(itemName,JSON.stringify(initialValue)); //creamos el elemnto pero con un arreglo vacio
              parsedItem=initialValue; //le damos un estado por defecto a parsedTodos tambien
            }
            else
            {
              //JSON.parse transforma el string del localstorage en un objeto de javascrips - arreglo o lista de TODOS
              parsedItem=JSON.parse(localStorageItem)
            }
  
            setItem(parsedItem); //actualizo el estado de item
            setLoading(false); //ya tengo la informacion y TERMINO DE CARGAR -- entonces
            } catch(error){
              setError(error) //SI HAY ERROR LO CAPTURO Y DEVUELVO
            }
      }, 3000);
    }
    );
  
    const savedItem = (newItem) => {
      try{
          //lo transformo a string
          const stringifiedTodos = JSON.stringify(newItem);
          localStorage.setItem(itemName,stringifiedTodos) //TODOS_V1 -->NOMBRE --stringifiedTodos-->VALOR
          setItem(newItem) // ahora COMPLETA EN LA APP como antes 
         }
      catch(error){
           setError(error)//SI HAY ERROR LO CAPTURO Y DEVUELVO
         }
    };
  
    //retornamos los valores -- es lo unico que necesitamos en la app --- lo paso de [] VECTOR a OBJETO {} CUSTOOM REACT HOOK
    return{
      item,
      savedItem,
      loading,
      error,
    };
  }

  //exportamos la funcion para que la podamos usar desde cualquier otro archivo
  export{useLocalStorage};