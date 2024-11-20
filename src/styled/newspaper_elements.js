import styled from 'styled-components';

const NewspaperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Flexible columns */
  gap: 16px; /* Space between blocks */
  padding: 16px;
  background-color: #f5f5dc; /* Newspaper-like off-white background */
`;

const NewspaperStory = styled.div`
  background-color: white;
  border: 1px solid #000; /* Black border for a classic newspaper feel */
  padding: 16px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
  font-size: 14px; /* Keeps text readable and compact */
  line-height: 1.6; /* Comfortable reading line height */
  text-align: justify; /* Justified text for a traditional newspaper look */
  overflow: hidden;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    border-bottom: 1px solid #000; /* Section title underline */
    padding-bottom: 4px;
  }

  p {
    margin-bottom: 12px;
  }

  small {
    display: block;
    margin-top: 8px;
    font-style: italic;
    font-size: 12px;
    color: #555; /* Subtle color for timestamps */
  }
`;

export { NewspaperGrid, NewspaperStory };
