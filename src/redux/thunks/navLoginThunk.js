import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const checkLoginStatus = createAsyncThunk('CheckLoginStatus', async () => {
  let status = false;
  const response = await axios.get(
    'https://petbnb.onrender.com/current_user',
    headers,
  );
  if (response.status === 200) {
    status = true;
  } else {
    status = false;
  }
  return status;
});

export default checkLoginStatus;
