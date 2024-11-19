import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Login } from './login';
import { Newsletter } from './newsletter';

const Index = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        setUser(data);
      }
    } catch (err) {
      console.error('Error during login: ', err);
    }
  };

  return (
    <div>
      {!user && (
        <Login
          handleFormSubmit={handleSubmit}
          username={username}
          onUsernameChange={onUsernameChange}
          password={password}
          onPasswordChange={onPasswordChange}
        />
      )}
      {user && <Newsletter user={user} />}
    </div>
  );
};

export { Index };
