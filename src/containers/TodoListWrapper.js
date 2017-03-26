import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { removeTodo, toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (id) => {
    dispatch(removeTodo(id));
  },
  onToggleTodo: (id) => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
