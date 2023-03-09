import { createSlice } from '@reduxjs/toolkit';
import { fetchPet } from '../thunks/petThunks';

const petSlice = createSlice({
  name: 'pet',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchPet.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPet.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const petReducer = petSlice.reducer;
export default petReducer;
