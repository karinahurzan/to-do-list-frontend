import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./operations";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    filters: {
      statusType: "",
      sortOrder: "asc",
      sortBy: "priority",
    },
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters } = todosSlice.actions;
export default todosSlice.reducer;
