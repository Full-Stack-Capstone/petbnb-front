import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'formdata/multipart',
    Authorization: localStorage.getItem('token'),
  },
};
const editUser = createAsyncThunk('editUser', async (userId, body) => {
  const response = await axios.put(`http://127.0.0.1:3001/users/${userId}`, body, headers);
  return response.data;
});

export default editUser;
