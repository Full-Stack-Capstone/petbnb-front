import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const logout = createAsyncThunk('user/logout', async () => {
  const response = await axios.delete('https://petbnb.onrender.com/logout', headers);
  if (response.status === 200) {
    // remove token from local storage
    localStorage.removeItem('token');
    return true;
  }
  return response;
});

export default logout;
