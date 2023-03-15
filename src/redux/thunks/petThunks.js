import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

export const fetchPets = createAsyncThunk('fetchPet', async () => {
  const response = await axios.get('https://petbnb.onrender.com/pets/', headers);
  return response.data;
});

export const fetchPet = createAsyncThunk('fetchPet', async (petId) => {
  const response = await axios.get(`https://petbnb.onrender.com/pets/${petId}`, headers);
  return response.data;
});

export const deletePet = createAsyncThunk('deletePet', async (petId) => {
  const response = await axios.delete(`https://petbnb.onrender.com/pets/${petId}`, headers);
  return response.data;
});

export const createPet = createAsyncThunk('createPet', async (credentials) => {
  const response = await fetch('https://petbnb.onrender.com/pets', {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: credentials,
  });
  return response.data;
});

export const editPet = createAsyncThunk('createPet', async (props) => {
  const { formData, petId } = props;
  const response = await fetch(`https://petbnb.onrender.com/pets/${petId}`, {
    method: 'PUT',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: formData,
  });
  return response.data;
});
