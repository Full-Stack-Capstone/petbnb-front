// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const headers = {
//   headers: {
//     ContentType: 'application/json',
//     Authorization: localStorage.getItem('token'),
//   },
// };
// const fetchUser = createAsyncThunk('fetchUser', async (userId) => {
//   const response = await axios.get(`http://127.0.0.1:3001/users/${userId}`, headers);
//   return response.data;
// });

// export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
//   const response = await axios.get('http://127.0.0.1:3001/users/', headers);
//   return response.data;
// });

// export default fetchUser;
