export interface Todo {
  completed: boolean;
  id: string;
  text: string;
};

export interface TodoProps extends Todo {
  isFirst: boolean;
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}
