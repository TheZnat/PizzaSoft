import axios from "axios";
import { DataState, Status } from "../../../types/common";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: DataState = {
  items: [],
  isLoading: false,
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk("data/fetchItems", async () => {
  const response = await axios.get(
    "https://673c921196b8dcd5f3fa990c.mockapi.io/employees"
  );
  return response.data;
});

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
