import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";

export const fetchTodos = createAsyncThunk(
  "todos/load",
  async (
    { statusType = "", sortBy = "priority", sortOrder = "asc" } = {},
    { rejectWithValue }
  ) => {
    try {
      const params = { statusType, sortBy, sortOrder };

      const { data } = await api.get("/todos", { params });
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createTodo = createAsyncThunk(
  "todos/create",
  async (values, { rejectWithValue }) => {
    try {
      const payload = {
        todo: values.todo,
        ...(values.priority ? { priority: values.priority } : {}),
      };
      const { data } = await api.post("/todos", payload);

      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (todoId, { rejectWithValue }) => {
    try {
      await api.delete(`/todos/${todoId}`);
      return todoId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async ({ todoId, payload }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`/todos/${todoId}`, payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
