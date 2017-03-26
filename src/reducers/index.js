import { combineReducers } from 'redux';
import { filterReducer } from './filters';
import { todosReducer } from './todos';

const AppReducer = combineReducers({
  currentFilter: filterReducer,
  todos: todosReducer
});

export default AppReducer;
