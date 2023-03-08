import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;