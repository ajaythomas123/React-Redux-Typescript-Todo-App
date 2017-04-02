import { createSelector } from 'reselect';
import { AppState, Todo } from '../types/index';

const getTodos = (state: AppState) => state.todos;
const getFilter = (state: AppState) => state.filter;

const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos: Array<Todo>, filter: string) => {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.completed);

      case 'Pending':
        return todos.filter(todo => !todo.completed);

      case 'All':
      default:
        return todos;
    }
  }
);

export default getFilteredTodos
