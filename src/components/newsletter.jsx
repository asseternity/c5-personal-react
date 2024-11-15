import { useState } from 'react';
import { Link } from 'react-router-dom';

const Newsletter = ({ user }) => {
  return (
    <div>
      <h1>Newsletter for {user.user.username}</h1>
    </div>
  );
};

export { Newsletter };
