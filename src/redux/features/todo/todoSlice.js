import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todoApp',
    initialState: {
      todos: [],
    },
    reducers: {
      addTodo: (state, action) => {
       
      }
    },
  })
  
  export const { addTodo } = todoSlice.actions;
  export default todoSlice.reducer;