import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, title, completed } = action.payload;
      state.push({ id, title, completed });
    },
    removeTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      const { id, title, completed } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state[index] = { id, title, completed };
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
