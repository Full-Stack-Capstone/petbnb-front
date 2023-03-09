import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const addRoomThunk = createAsyncThunk('postRoom', async (credentials) => {
  const response = await axios.post('http://127.0.0.1:3001/pet_rooms', credentials, headers)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  console.log(response.json());
});

export default addRoomThunk;
