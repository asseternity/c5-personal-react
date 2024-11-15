import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = ({
  handleFormSubmit,
  username,
  onUsernameChange,
  password,
  onPasswordChange,
}) => {
  return (
    <div className="login_main">
      <div className="login_header">
        <h2>Login</h2>
      </div>
      <div className="login_content">
        <form onSubmit={handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={onUsernameChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login_extras">
        <Link to="/test/">
          <p>Test page</p>
        </Link>
      </div>
    </div>
  );
};

export { Login };
