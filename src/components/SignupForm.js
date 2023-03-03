import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import signUpUser from '../redux/slices/signUpThunk';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      user: {
        name,
        email,
        password,
      },
    };
    dispatch(signUpUser(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
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

export default SignUpForm;
