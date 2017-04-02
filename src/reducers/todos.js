const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.payload ?
        Object.assign({}, todo, { completed: !todo.completed }) : todo),
      );

    default:
      return state;
  }
};

export default todos;
