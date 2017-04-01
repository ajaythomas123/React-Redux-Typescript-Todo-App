import { Todo } from './index';

export interface AppState {
  filter: string,
  todos: Array<Todo>
};
