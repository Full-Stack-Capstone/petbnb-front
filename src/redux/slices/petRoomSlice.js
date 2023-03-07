import { createSlice } from '@reduxjs/toolkit';
import fetchPetRoom from '../thunks/fetchPetRoom';

const petRoomSlice = createSlice({
  name: 'petRoom',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchPetRoom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPetRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPetRoom.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const petRoomReducer = petRoomSlice.reducer;
export default petRoomReducer;
