import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: {
    status: '',
    original_launch: '',
    type: '',
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
  },
  searchResults: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    updatePagination: (state, action) => {
      state.pagination = action.payload;
    },
    updateSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { updateSearchData, updatePagination, updateSearchResults } = appSlice.actions;

export default appSlice.reducer;
