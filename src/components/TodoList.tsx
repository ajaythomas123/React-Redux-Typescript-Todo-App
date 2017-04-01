import * as React from 'react';
import TodoItem from './TodoItem';
import { ITodoList } from './ITodoList';

interface TodoListProps extends ITodoList {
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

export default function TodoList(props: TodoListProps) {
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
  );
}
