import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const deletePetRoom = createAsyncThunk('deleteRoom', async (petRoomId) => {
  const response = await axios.delete(`https://petbnb.onrender.com/pet_rooms/${petRoomId}`, headers);
  return response.data;
});

export default deletePetRoom;
