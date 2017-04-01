import * as React from 'react';
import { ITodoItem } from './ITodoItem';

interface TodoItemProps extends ITodoItem {
  isFirst: boolean;
  onRemoveTodo: () => void;
  onToggleTodo: () => void;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <li className="list-group-item" style={ props.isFirst ? { borderTop: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'} : {} }>
      <div className="row">
        <span className="col-md-11" style={{textDecoration: props.completed ? 'line-through' : 'none'}} onClick={props.onToggleTodo}>{props.text}</span>
        <span className="col-md-1 glyphicon glyphicon-remove" onClick={props.onRemoveTodo}></span>
      </div>
    </li>
  );
}
