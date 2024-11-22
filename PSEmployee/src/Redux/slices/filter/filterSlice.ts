import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FormState {
  searchQuery: string;
  selectedOption: string;
  selectedDate: string;
  isArchived: boolean;
}

const initialState: FormState = {
  searchQuery: "",
  selectedOption: "",
  selectedDate: "",
  isArchived: false,
};



export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setIsArchived: (state, action: PayloadAction<boolean>) => {
      state.isArchived = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedOption,
  setSelectedDate,
  setIsArchived,
} = filterSlice.actions;

export default filterSlice.reducer;
