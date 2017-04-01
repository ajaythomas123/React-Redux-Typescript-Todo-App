import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { removeTodo, toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';
import { AppState, Todo } from '../types/index';
import { getFilteredTodos } from '../selectors/index';

const mapStateToProps = (state: AppState) => ({
  todos: getFilteredTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onRemoveTodo: (id: string) => {
    dispatch(removeTodo(id));
  },
  onToggleTodo: (id: string) => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
