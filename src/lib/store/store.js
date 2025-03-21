import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../lib/store/feature/todo/todoSlice";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
