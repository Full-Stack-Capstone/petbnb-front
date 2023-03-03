import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginUser from '../../redux/thunks/loginThunk';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      user: {
        email,
        password,
      },
    };
    dispatch(loginUser(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
