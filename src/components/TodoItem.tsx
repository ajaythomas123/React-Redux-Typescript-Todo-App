import * as React from 'react';
import { ITodoItem } from './ITodoItem';

const TodoItem = (props: any) => {
  return (
    <div>
    <h2>{props.text}</h2>
    <h3>sksa</h3>
    </div>
  )
}

export default TodoItem;
