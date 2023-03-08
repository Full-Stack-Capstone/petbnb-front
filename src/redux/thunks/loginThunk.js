/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUser = createAsyncThunk('Login', async (credentials) => {
  const response = await axios.post('http://127.0.0.1:3001/login', credentials).then((response) => {
    localStorage.setItem('token', response.headers.get('Authorization'));
    return response.json();
  })
    .catch((error) => {
      console.log(error.response.data);
    });
  console.log(response.json());
});

export default loginUser;
