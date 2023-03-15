import { createAsyncThunk } from '@reduxjs/toolkit';

const addRoomThunk = createAsyncThunk('postRoom', async (credentials) => {
  const response = await fetch('https://petbnb.onrender.com/pet_rooms', {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: credentials,
  });
  return response.data;
});

export default addRoomThunk;
