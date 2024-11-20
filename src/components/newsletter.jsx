import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewspaperGrid, NewspaperStory } from '../styled/newspaper_elements';
import DownRowWrapper from '../styled/down_row_wrapper';
import BackgroundImageWrapper from '../styled/background_image_wrapper';

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

  const bgImagePath = 'newspaperimage.jpg';

  return (
    <DownRowWrapper>
      <BackgroundImageWrapper image={bgImagePath}>
        <h1>Viva Verso: {user.username}'s Edition</h1>
      </BackgroundImageWrapper>
      <NewspaperGrid>
        {messages
          .slice() // Creates a copy of the array to avoid mutating the state directly
          .reverse() // Reverses the array so latest messages appear first
          .map((message) => (
            <NewspaperStory key={message.id}>
              <h2>{message.name}</h2>
              <p>{message.text}</p>
              <small>{new Date(message.createdAt).toLocaleString()}</small>
            </NewspaperStory>
          ))}
      </NewspaperGrid>
    </DownRowWrapper>
  );
};

export { Newsletter };
