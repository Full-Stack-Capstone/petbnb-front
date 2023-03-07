import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};
const fetchPet = createAsyncThunk('fetchPet', async (petId) => {
  const response = await axios.get(`http://127.0.0.1:3001/pets/${petId}`, headers);
  return response.data;
});

export default fetchPet;
