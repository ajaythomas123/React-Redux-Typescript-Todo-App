import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { removeTodo, toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';
import { ITodoItem } from '../components/ITodoItem';

const mapStateToProps = (state: { filter: string, todos: Array<ITodoItem> }) => ({
  todos: state.todos
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
