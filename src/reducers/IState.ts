import { ITodoItem } from '../components/ITodoItem';

export interface IState {
  filter: string;
  todos: Array<ITodoItem>
}
