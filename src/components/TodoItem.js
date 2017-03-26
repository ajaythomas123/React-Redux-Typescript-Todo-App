import React from 'react';

export default function TodoItem(props) {
  return (
    <li className="list-group-item">
      <div className="row">
        <span className="col-md-11" style={{textDecoration: props.active ? 'line-through' : 'none'}} onClick={props.onToggleTodo}>{props.text}</span>
        <span className="col-md-1 glyphicon glyphicon-remove" onClick={props.onRemoveTodo}></span>
      </div>
    </li>
  );
}
