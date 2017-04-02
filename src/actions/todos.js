import { v4 } from 'uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    id: v4(),
    text,
  },
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
