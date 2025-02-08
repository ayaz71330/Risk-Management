import { createSlice } from '@reduxjs/toolkit';
import { riskData } from '../data/mockData';

const initialState = {
  searchTerm: '', 
  searchResults: null,
  loading: false,
  error: null,
};

const riskSlice = createSlice({
  name: 'risk',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchAddress: (state) => {
      const result = riskData.find(data => data.source_address === state.searchTerm);
      state.searchResults = result || null;
      state.error = result ? null : 'Address not found';
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.searchResults = null;
      state.error = null;
    },
  },
});

export const { setSearchTerm, searchAddress, clearSearch } = riskSlice.actions;
export default riskSlice.reducer;
