import { createSelector } from 'reselect';
import { IState } from '../reducers/IState';
import { ITodoItem } from '../components/ITodoItem';

const getTodos = (state: IState) => state.todos;
const getFilter = (state: IState) => state.filter;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos: Array<ITodoItem>, filter: string) => filter === 'Completed' ?
    todos.filter(todo => todo.completed) :
    filter === 'Pending' ? todos.filter(todo => !todo.completed) : todos
);
