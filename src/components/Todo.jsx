import React, { PropTypes } from 'react';

const Todo = (props) => {
  const _onRemoveTodo = () => {
    const { onRemoveTodo } = props;
    onRemoveTodo(props.id);
  };

  const _onToggleTodo = () => {
    const { onToggleTodo } = props;
    onToggleTodo(props.id);
  };

  return (
    <li
      className="list-group-item"
      style={
        props.isFirst ? {
          borderTop: 'none',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        } : {}
      }
    >
      <div className="row">
        <span
          className="col-md-11"
          style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
          onClick={_onToggleTodo}
        >
          {props.text}
        </span>
        <span
          className="col-md-1 glyphicon glyphicon-remove"
          style={{ textDecoration: 'none' }}
          onClick={_onRemoveTodo}
        />
      </div>
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default Todo;
