import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const signUpUser = createAsyncThunk('signup', async (credentials) => {
  await fetch('http://localhost:3001/signup', {
    method: 'POST',
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
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
      return res.json();
    }
    throw new Error(res);
  });
});

export default signUpUser;
