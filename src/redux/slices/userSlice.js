import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchCurrentUser, editUser } from '../thunks/userThunks';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    // get info of a user based on in
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // get info of current user if logged in
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // edit current user
    builder.addCase(editUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
