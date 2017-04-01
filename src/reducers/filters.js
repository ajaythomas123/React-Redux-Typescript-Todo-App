export const filter = (state = 'All', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};
