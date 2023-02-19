import React, { useState } from 'react';
import '../styles/loginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría el código para enviar la información al servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
