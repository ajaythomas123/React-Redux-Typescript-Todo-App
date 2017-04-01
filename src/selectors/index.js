import { createSelector } from 'reselect';

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => filter === 'Completed' ?
    todos.filter(todo => todo.completed) :
    filter === 'Pending' ? todos.filter(todo => !todo.completed) : todos
);
