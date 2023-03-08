import { createSlice } from '@reduxjs/toolkit';
import { createReservation } from '../thunks/reservationsThunks';

const createReservationSlice = createSlice({
  name: 'createReservations',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(createReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createReservation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(createReservation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const createReservationReducer = createReservationSlice.reducer;
export default createReservationReducer;
