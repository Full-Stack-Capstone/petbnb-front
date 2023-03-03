import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRooms = createAsyncThunk('rooms/fetch', async () => {
  const response = await axios.get('http://localhost:3000/user/1/pet_rooms');
  
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
    builder.addCase(fetchRooms.pending, (state, _) => {
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
