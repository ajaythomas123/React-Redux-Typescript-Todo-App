import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { removeTodo, toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';
import { ITodoItem } from '../components/ITodoItem';
import { IState } from '../reducers/IState';

const getFilteredTodos = (todos: Array<ITodoItem>, filter: string) => {
  return filter === 'Completed' ? todos.filter(todo => todo.completed) :
    filter === 'Pending' ? todos.filter(todo => !todo.completed) : todos;
};

const mapStateToProps = (state: IState) => ({
  todos: getFilteredTodos(state.todos, state.filter)
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
