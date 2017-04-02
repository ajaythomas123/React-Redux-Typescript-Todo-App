import { createSelector } from 'reselect';

const getTodos = state => state.todos;
const getFilter = state => state.filter;

const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case 'Completed':
        return filter(todo => todo.completed);

      case 'Pending':
        return filter(todo => !todo.completed);

      case 'All':
      default:
        return todos;
    }
  },
);

export default getFilteredTodos;

