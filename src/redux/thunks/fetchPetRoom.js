import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPetRoom = createAsyncThunk('fetchRoom', async (petRoomId) => {
  const response = await axios.get(`https://petbnb.onrender.com/pet_rooms/${petRoomId}`);
  return response.data;
});

export default fetchPetRoom;
