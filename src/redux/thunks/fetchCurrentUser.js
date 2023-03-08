import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};
const fetchCurrentUser = createAsyncThunk('fetchCurrentUser', async () => {
  const response = await axios.get('http://127.0.0.1:3001/current_user', headers);
  return response.data;
});

export default fetchCurrentUser;
