import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3001/reservations';
const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

export const fetchReservations = createAsyncThunk('fetchReservations', async () => {
  const response = await axios.get(url, headers);
  return response.data;
});

export const createReservation = createAsyncThunk('createReservations', async (body) => {
  const response = await axios.post(url, headers, body);
  return response.data;
});
