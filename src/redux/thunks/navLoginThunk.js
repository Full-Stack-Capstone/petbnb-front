import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};
// const checkLoginStatus = createAsyncThunk('Check Login Status', async () => {
//   const response = await axios
//     .get('http://localhost:3001/current_user', headers)
//     .then((response) => {
//       if (response.status === 200) {
//         console.log('logged in');
//       }
//     })
//     .catch((error) => {
//       console.log('api errors:', error);
//       console.log('not logged in');
//     });
//   return response.data;
// });

const checkLoginStatus = createAsyncThunk('CheckLoginStatus', async () => {
  let status = false;
  const response = await axios.get(
    'http://127.0.0.1:3001/current_user',
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
