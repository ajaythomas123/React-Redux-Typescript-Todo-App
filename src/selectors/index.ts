import { createSelector } from 'reselect';
import { AppState, Todo } from '../types/index';

const getTodos = (state: AppState) => state.todos;
const getFilter = (state: AppState) => state.filter;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos: Array<Todo>, filter: string) => filter === 'Completed' ?
    todos.filter(todo => todo.completed) :
    filter === 'Pending' ? todos.filter(todo => !todo.completed) : todos
);
