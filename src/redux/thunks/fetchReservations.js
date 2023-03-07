import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3001/reservations';
const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const fetchReservations = createAsyncThunk('fetchReservations', async () => {
  const response = await axios.get(url, headers);
  return response.data;
});

export default fetchReservations;
