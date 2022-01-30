import React from "react";
import "./TodoList.css";

//props-- recibe la lista de elementos
//este codigo solo le da la VIÑETA el * y luego el item se renderiza en todoitem
function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
