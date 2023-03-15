import { createSlice } from '@reduxjs/toolkit';
import { fetchPets } from '../thunks/petThunks';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchPets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const petsReducer = petsSlice.reducer;
export default petsReducer;
