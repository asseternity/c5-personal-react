import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Newsletter = ({ user }) => {
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        // 'http://localhost:3000/api/allMessages',
        'https://c5-personal-production.up.railway.app/api/allMessages',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.error('Error during fetching your messages: ', err);
    }
  };

  return (
    <div>
      <h1>Newsletter for {user.username}</h1>
      <button onClick={fetchMessages}>Fetch messages</button>
    </div>
  );
};

export { Newsletter };
