import { createSlice } from '@reduxjs/toolkit';
import fetchReservations from '../thunks/fetchReservations';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const reservationsReducer = reservationsSlice.reducer;
export default reservationsReducer;
