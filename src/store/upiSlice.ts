import { createSlice } from '@reduxjs/toolkit';

interface UpiState {
  attemptCount: number;
  upiId: string;
}

const initialState: UpiState = {
  attemptCount: 0,
  upiId: '',
};

const upiSlice = createSlice({
  name: 'upi',
  initialState,
  reducers: {
    incrementAttempt(state) {
      state.attemptCount += 1;
    },
    setUpiId(state, action: { payload: string }) {
      state.upiId = action.payload;
    },
  },
});

export const { incrementAttempt, setUpiId } = upiSlice.actions;
export default upiSlice.reducer;    