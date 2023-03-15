import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://petbnb.onrender.com/reservations';
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
  const response = await axios.post(url, body, headers);
  return response.data;
});

export const deleteReservation = createAsyncThunk('deleteReservation', async (reservationId) => {
  const response = await axios.delete(`https://petbnb.onrender.com/pets/${reservationId}`, headers);
  return response.data;
});
