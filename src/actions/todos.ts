import { v4 } from 'uuid';

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: {
    id: v4(),
    text
  }
});

export const removeTodo = (id: string) => ({
  type: 'REMOVE_TODO',
  payload: id
});

export const toggleTodo = (id: string) => ({
  type: 'TOGGLE_TODO',
  payload: id
});
