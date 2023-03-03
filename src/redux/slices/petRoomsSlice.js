import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRooms = createAsyncThunk('fetchRooms', async () => {
  const response = await axios.get('http://127.0.0.1:3001');
  return response.data;
});

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

export const petRoomsReducer = petRoomsSlice.reducer;
