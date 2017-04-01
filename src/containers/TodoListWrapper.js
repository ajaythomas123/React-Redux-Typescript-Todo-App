import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';
import { getFilteredTodos } from '../selectors/index';

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state)
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
