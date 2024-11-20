import styled from 'styled-components';

const BackgroundImageWrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Centers the image */
  opacity: 0.5; /* Sets the image opacity to 50% */
  width: 100%; /* Makes it responsive to parent width */
  height: 100%; /* Ensures full height of the container */
  position: relative; /* Allows you to layer content over it */
`;

export default BackgroundImageWrapper;
