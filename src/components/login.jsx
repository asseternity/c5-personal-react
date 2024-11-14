import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState({
    user: { username: 'nobody' },
  });

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://c5-personal-production.up.railway.app/api/log-in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCurrentUser(data);
      }
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
        <p>Currently logged in as: {currentUser.user.username}</p>
      </div>
    </div>
  );
};

export { Login };
