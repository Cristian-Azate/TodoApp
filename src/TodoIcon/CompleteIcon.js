//componente que envía todas esas props a icon
import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export{CompleteIcon}
//lo llamaremos desde TodoItem