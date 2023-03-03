import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUser = createAsyncThunk('Login', async (credentials) => {
  const response = await axios.post('http://127.0.0.1:3001/login', credentials).then((response) => {
    console.log(response.data);
  })
    .catch((error) => {
      console.log(error.response.data);
    });
  console.log(response.data);
  return response.data;
});

export default loginUser;
