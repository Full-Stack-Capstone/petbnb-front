import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

export const fetchPets = createAsyncThunk('fetchPet', async () => {
  const response = await axios.get('http://127.0.0.1:3001/pets/', headers);
  return response.data;
});

export const fetchPet = createAsyncThunk('fetchPet', async (petId) => {
  const response = await axios.get(`http://127.0.0.1:3001/pets/${petId}`, headers);
  return response.data;
});
