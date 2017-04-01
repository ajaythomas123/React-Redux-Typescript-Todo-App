const filter = (state = 'All', action: { type: string, payload: string }) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filter;
