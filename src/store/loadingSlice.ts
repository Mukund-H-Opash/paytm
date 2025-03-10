import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: true, // Start as true (splash screen is visible)
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action: { payload: boolean }) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;