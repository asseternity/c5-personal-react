import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
    } catch (err) {
      console.error('Error during login: ', err);
    }
  };

  return (
    <div className="login_main">
      <div className="login_header">
        <h2>Login</h2>
      </div>
      <div className="login_content">
        <form onSubmit={handleSubmit}>
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
