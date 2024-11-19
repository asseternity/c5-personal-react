import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Newsletter = ({ user }) => {
  const fetchMessages = async () => {
    console.log('user in React = ');
    console.log(user);
    try {
      const response = await fetch(
        'https://c5-personal-production.up.railway.app/api/allMessages',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(user),
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
