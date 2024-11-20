import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewspaperGrid, NewspaperStory } from '../styled/newspaper_elements';
import CenteredWrapper from '../styled/centered_wrapper';

const Newsletter = ({ user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          'https://c5-personal-production.up.railway.app/api/allMessages',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ user }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        }
      } catch (err) {
        console.error('Error during fetching your messages: ', err);
      }
    };

    fetchMessages();
  }, [user]);

  return (
    <div>
      <CenteredWrapper>
        <h1>Newsletter for {user.username}</h1>
      </CenteredWrapper>
      <NewspaperGrid>
        {messages.map((message) => (
          <NewspaperStory key={message.id}>
            <h2>{message.name}</h2>
            <p>{message.text}</p>
            <small>{new Date(message.createdAt).toLocaleString()}</small>
          </NewspaperStory>
        ))}
      </NewspaperGrid>
    </div>
  );
};

export { Newsletter };
