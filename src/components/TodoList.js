import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <div className="col-md-12">
      <ul className="list-group">
      {
        props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            active={todo.active}
            onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}
            onToggleTodo={props.onToggleTodo.bind(null, todo.id)}
          />
        )
      }
      </ul>
    </div>
  )
}
