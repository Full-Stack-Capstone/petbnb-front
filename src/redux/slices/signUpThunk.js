import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const signUpUser = createAsyncThunk('Signup', async (credentials) => {
  await fetch('http://localhost:3001/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: credentials.user.name,
        email: credentials.user.email,
        password: credentials.user.password,
      },
    }),
  })
    .then((res) => {
      console.log(res);
      console.log(res.headers.get('Authorization'));
      localStorage.setItem('token', res.headers.get('Authorization'));
    })
    .then((json) => console.dir(json))
    .catch((err) => console.error(err));
});

export default signUpUser;
