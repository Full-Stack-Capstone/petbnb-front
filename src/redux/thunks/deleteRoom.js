import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deletePetRoom = createAsyncThunk('deleteRoom', async (petRoomId) => {
  const response = await axios.delete(`http://127.0.0.1:3001/pet_rooms/${petRoomId}`);
  return response.data;
});

export default deletePetRoom;
