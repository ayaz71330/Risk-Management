import { configureStore } from '@reduxjs/toolkit';
import riskReducer from './riskSlice';

export const store = configureStore({
  reducer: {
    risk: riskReducer, 
  },
});

export { setSearchTerm, searchAddress } from './riskSlice';
