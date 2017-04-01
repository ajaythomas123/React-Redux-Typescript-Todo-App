import * as React from 'react';
import TodoItem from './TodoItem';
import { ITodoList } from './ITodoList';

interface TodoListProps extends ITodoList {
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

export default function TodoList(props: TodoListProps) {
  return (
    <ul className="list-group">
    {
      props.todos.map((todo, index) =>
        <TodoItem
          key={todo.id}
          id={todo.id}
          isFirst={index === 0}
          text={todo.text}
          completed={todo.completed}
          onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}
          onToggleTodo={props.onToggleTodo.bind(null, todo.id)}
        />
      )
    }
    </ul>
  );
}
