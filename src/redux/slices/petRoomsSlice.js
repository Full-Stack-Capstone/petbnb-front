import { createSlice } from '@reduxjs/toolkit';
import { fetchRooms } from '../thunks/fetchRooms';

const petRoomsSlice = createSlice({
  name: 'petRooms',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchRooms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const petRoomsReducer = petRoomsSlice.reducer;
export default petRoomsReducer;
