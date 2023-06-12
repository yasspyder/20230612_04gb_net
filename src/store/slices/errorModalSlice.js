import { createSlice } from '@reduxjs/toolkit';

const errorModalSlice = createSlice({
  name: 'errorModal',
  initialState: {
    error: [],
    show: false,
  },
  reducers: {
    showModal(state, action) {
      state.show = true;
      state.error = action.payload;
    },
    closeModal(state) {
      state.show = false;
    },
  },
});

export const { showModal, closeModal } = errorModalSlice.actions;

export default errorModalSlice.reducer;
