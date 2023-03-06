import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRooms = createAsyncThunk('fetchRooms', async () => {
  const response = await axios.get('http://127.0.0.1:3001');
  return response.data;
});

export const fetchRoomId = createAsyncThunk('fetchRooms', async (roomId) => {
  const response = await axios.get(`http://127.0.0.1:3001/pet_rooms/${roomId}`);
  return response.data;
});
