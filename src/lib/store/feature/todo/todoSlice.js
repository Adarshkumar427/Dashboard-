import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [], selectedTodos: [], loading: false },
  reducers: {
    toggleSelect: (state, action) => {
      const id = action.payload;
      if (state.selectedTodos.includes(id)) {
        state.selectedTodos = state.selectedTodos.filter(
          (todoId) => todoId !== id
        );
      } else {
        state.selectedTodos.push(id);
      }
    },
    deleteSelected: (state) => {
      state.todos = state.todos.filter(
        (todo) => !state.selectedTodos.includes(todo.id)
      );
      state.selectedTodos = [];
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
  },
});
export const { toggleSelect, deleteSelected, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
