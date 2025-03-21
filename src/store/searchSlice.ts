// redux/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the state
interface SearchState {
  searchActive: boolean;
  query: string;
}

// Initial state of the slice
const initialState: SearchState = {
  searchActive: false,
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // Action to activate or deactivate the search
    setSearchActive: (state, action: PayloadAction<boolean>) => {
      state.searchActive = action.payload;
    },
    // Action to set the search query
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchActive, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
