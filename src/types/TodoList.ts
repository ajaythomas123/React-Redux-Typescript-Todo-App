import { Todo } from './index';

export interface TodoList {
  todos: Array<Todo>;
};

export interface TodoListProps extends TodoList {
  onRemoveTodo: () => void;
  onToggleTodo: () => void;
}
