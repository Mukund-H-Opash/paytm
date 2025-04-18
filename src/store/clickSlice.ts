import { createSlice } from '@reduxjs/toolkit';

interface ClickState {
  count: number;
}

const initialState: ClickState = {
  count: 0,
};

const clickSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
    incrementClick(state) {
      state.count += 1;
    },
  },
});

export const { incrementClick } = clickSlice.actions;
export default clickSlice.reducer;