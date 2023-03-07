import { createSlice } from '@reduxjs/toolkit';
import fetchReservations from '../thunks/fetchReservations';

const ReservationsSlice = createSlice({
  name: 'Reservations',
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
const ReservationsReducer = ReservationsSlice.reducer;
export default ReservationsReducer;
