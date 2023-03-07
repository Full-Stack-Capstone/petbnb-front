import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginUser from '../../redux/thunks/loginThunk';
import './LoginForm.css';

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
    <div className="login-form">
      <h1>Login To Your Account</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" id="email">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password" id="password">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
