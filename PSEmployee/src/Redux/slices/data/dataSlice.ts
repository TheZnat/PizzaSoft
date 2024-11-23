import axios from "axios";
import { DataState, Status } from "../../../types/common";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: DataState = {
  items: [],
  isLoading: false,
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk(
  "data/fetchItems",
  async (
    filters: {
      name?: string;
      role?: string;
      birthday?: string;
      isArchive?: boolean;
      id?: string;
    } = {}
  ) => {
    try {
      const params: any = {};
      if (filters.name) params.name = filters.name;
      if (filters.id) params.id = filters.id;
      if (filters.role) params.role = filters.role;
      if (filters.birthday) params.birthday = filters.birthday;
      if (filters.isArchive !== undefined)
        params.isArchive = String(filters.isArchive);

      const response = await axios.get(
        `https://673c921196b8dcd5f3fa990c.mockapi.io/employees?${new URLSearchParams(
          params
        )}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Обработка ошибки
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
        state.status = Status.LOADING;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.isLoading = false;
        state.status = Status.ERROR;
      });
  },
});

export default dataSlice.reducer;
