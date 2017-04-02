import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = props => (
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
        />,
      )
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
