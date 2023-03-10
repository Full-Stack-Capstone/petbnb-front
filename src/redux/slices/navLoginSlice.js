import { createSlice } from '@reduxjs/toolkit';
import checkLoginStatus from '../thunks/navLoginThunk';

const checkStatusSlice = createSlice({
  name: 'checkStatus',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(checkLoginStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(checkLoginStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const checkStatusReducer = checkStatusSlice.reducer;
export default checkStatusReducer;
