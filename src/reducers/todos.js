export const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, text: action.payload.text, active: false }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.payload ? Object.assign({}, todo, { active: !todo.active }) : todo;
      });
    default:
      return state;
  }
};
