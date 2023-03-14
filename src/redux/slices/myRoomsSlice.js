import { createSlice } from '@reduxjs/toolkit';
import { fetchMyRooms } from '../thunks/fetchRooms';

const myRoomsSlice = createSlice({
  name: 'myRooms',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchMyRooms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMyRooms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMyRooms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

const myRoomsReducer = myRoomsSlice.reducer;

export default myRoomsReducer;
