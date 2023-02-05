import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  openModal: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    openModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount, openModal } = counterSlice.actions;

export default counterSlice.reducer;
