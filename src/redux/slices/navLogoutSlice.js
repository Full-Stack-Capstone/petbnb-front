import { createSlice } from '@reduxjs/toolkit';
import logout from '../thunks/navLogoutThunk';

const checkLogoutSlice = createSlice({
  name: 'checkLogout',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const logoutReducer = checkLogoutSlice.reducer;
export default logoutReducer;
