//componente que envía todas esas props a icon
import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };

//lo llamaremos desde TodoItem