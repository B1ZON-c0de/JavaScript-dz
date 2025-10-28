import { createSlice } from "@reduxjs/toolkit";
import type { ITodoStore } from "../types/types.ts";
import { completeTodo, fetchTodos, addTodo, deleteTodo } from "./todoThunk.ts";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    search: "",
    status: "idle",
    error: null,
    isSorted: false,
    isLoading: false,
  } as ITodoStore,
  reducers: {
    toggleSorted: (state) => {
      state.isSorted = !state.isSorted;
    },
    setSearchTerm: (state, action) => {
      state.search = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH TODOS
      .addCase(fetchTodos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "completed";
        state.tasks = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        if (typeof action.payload === "string") state.error = action.payload;
      });
    builder
      // COMPLETE TODO
      .addCase(completeTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(completeTodo.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task,
        );
      })
      .addCase(completeTodo.rejected, (state, action) => {
        state.status = "failed";
        if (typeof action.payload === "string") state.error = action.payload;
      });
    builder
      // ADD TODO
      .addCase(addTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "completed";
        if (action.payload) {
          state.tasks.push(action.payload);
        }
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = "failed";
        if (typeof action.payload === "string") state.error = action.payload;
      });
    builder
      // DELETE TODO
      .addCase(deleteTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "completed";
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.payload);

        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});
export const { setSearchTerm, toggleSorted, setTasks } = todoSlice.actions;
export default todoSlice.reducer;
