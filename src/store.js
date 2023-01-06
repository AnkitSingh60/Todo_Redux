import { configureStore } from '@reduxjs/toolkit';
import todosReducer from "./redux/features/todo/todoSlice";

export default configureStore({
  reducer: {
    todos:todosReducer
  },
})