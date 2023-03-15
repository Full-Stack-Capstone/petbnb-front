/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUser = createAsyncThunk('Login', async (credentials) => {
  const response = await axios
    .post('https://petbnb.onrender.com/login', credentials)
    .then((response) => {
      localStorage.setItem('token', response.headers.get('Authorization'));
      window.location.reload();
      return response.json();
    })
    .catch((error) => {
      console.log('api errors:', error);
    });
  return response.data;
});

export default loginUser;
