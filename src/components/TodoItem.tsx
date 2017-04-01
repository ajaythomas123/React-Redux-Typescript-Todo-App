import * as React from 'react';
import { ITodoItem } from './ITodoItem';

interface TodoItemProps extends ITodoItem {
  onRemoveTodo: () => void;
  onToggleTodo: () => void;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <li className="list-group-item">
      <div className="row">
        <span className="col-md-11" style={{textDecoration: props.active ? 'line-through' : 'none'}} onClick={props.onToggleTodo}>{props.text}</span>
        <span className="col-md-1 glyphicon glyphicon-remove" onClick={props.onRemoveTodo}></span>
      </div>
    </li>
  );
}
