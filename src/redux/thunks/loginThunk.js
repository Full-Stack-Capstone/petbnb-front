import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUser = createAsyncThunk('Login', async (credentials) => {
  const response = await axios
    .post('http://127.0.0.1:3001/login', credentials)
    .then((response) => {
      window.location.reload();
      localStorage.setItem('token', response.headers.get('Authorization'));
      return response.json();
    })
    .catch((error) => {
      console.log('api errors:', error);
    });
  return response.data;
});

export default loginUser;
