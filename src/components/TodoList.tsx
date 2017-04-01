import * as React from 'react';
import Todo from './Todo';
import { TodoListProps } from '../types/index';

const TodoList = (props: TodoListProps) => (
  <ul className="list-group">
    {
      props.todos.map((todo, index) =>
        <Todo
          key={todo.id}
          id={todo.id}
          isFirst={index === 0}
          text={todo.text}
          completed={todo.completed}
          onRemoveTodo={props.onRemoveTodo}
          onToggleTodo={props.onToggleTodo}
        />
      )
    }
  </ul>
);

export default TodoList;
