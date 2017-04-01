import { ITodoItem } from '../components/ITodoItem';

const todos = (state:Array<ITodoItem> = [], action: { type: string, payload: any }) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.payload ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
      });
    default:
      return state;
  }
};

export default todos;
