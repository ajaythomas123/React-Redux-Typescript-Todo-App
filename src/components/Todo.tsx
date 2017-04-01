import * as React from 'react';
import { TodoProps } from '../types/index';

const Todo = (props: TodoProps) => {
  const _onRemoveTodo = () => {
    props.onRemoveTodo(props.id);
  };

  const _onToggleTodo = () => {
    props.onToggleTodo(props.id);
  };

  return (
    <li
      className="list-group-item"
      style={
        props.isFirst ? {
          borderTop: 'none',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px'
        } : {}
      }
    >
      <div className="row">
        <span
          className="col-md-11"
          style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
          onClick={_onToggleTodo}>{props.text}
        </span>
        <span
          className="col-md-1 glyphicon glyphicon-remove"
          onClick={_onRemoveTodo}></span>
      </div>
    </li>
  );
}

export default Todo;
