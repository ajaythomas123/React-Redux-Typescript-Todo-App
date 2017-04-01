import { combineReducers } from 'redux';
import { filter } from './filters';
import { todos } from './todos';

const AppReducer = combineReducers({
  filter,
  todos
});

export default AppReducer;
