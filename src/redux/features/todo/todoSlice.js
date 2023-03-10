import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoApp",
  initialState: {
    todos: [],
    completedTodos: [],
    activeTodos: [],
    showTodos: true,
    showCompletedTodos: false,
    showActiveTodos: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    updateTodo: (state, action) => {
      console.log('state:', state)
      console.log('action:', action)
      state.todos.map((todo) => {
        if (todo.id == action.payload.id){
          return (todo.content = action.payload.content);
        }
      });

    },

    completeTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      if (
        state.completedTodos.findIndex((todo) => todo.id === action.payload) !==
        -1
      ) {
        state.completedTodos = state.completedTodos.filter(
          (todo) => todo.id === action.payload
        );
      }
      if (
        state.activeTodos.findIndex((todo) => todo.id === action.payload) !== -1
      ) {
        state.activeTodos = state.activeTodos.filter(
          (todo) => todo.id === action.payload
        );
      }
    },

    showAllFunction: (state) => {
      state.showTodos = true;
      state.activeTodos = false;
      state.showCompletedTodos = false;
    },

    showActiveFunction: (state) => {
      const activeTodos = state.todos.filter((todo) => !todo.completed);
      state.activeTodos = activeTodos;
      state.showTodos = false;
      state.activeTodos = true;
      state.showCompletedTodos = false;
    },

    showCompletedFunction: (state) => {
      const completedTodos = state.todos.filter((todo) => todo.completed);
      state.completedTodos = completedTodos;
      state.showTodos = false;
      state.activeTodos = true;
      state.showCompletedTodos = true;
    },

    clearCompleted: (state) => {
      state.completedTodos = [];
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addTodo,
  updateTodo,
  completeTodo,
  removeTodo,
  showAllFunction,
  showActiveFunction,
  showCompletedFunction,
  clearCompleted,
} = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;
export const selectCompletedTodos = (state) => state.todos.completedTodos;
export const selectActiveTodos = (state) => state.todos.activeTodos;
export const selectShowTodos = (state) => state.todos.showTodos;
export const selectShowActiveTodos = (state) => state.todos.showActiveTodos;
export const selectShowCompletedTodos = (state) => state.todos.showCompletedTodos;

export default todoSlice.reducer;
