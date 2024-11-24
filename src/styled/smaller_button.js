import styled from 'styled-components';

const SmallerButton = styled.button`
  background: #f4e1b2; /* Paper-like background color */
  color: #3d2a1f; /* Dark brown text for an antique feel */
  font-family: 'Vinque';
  font-size: 14px; /* Smaller font size */
  font-weight: bold;
  padding: 8px 20px; /* Reduced padding */
  border: 2px solid #3d2a1f; /* Dark border to mimic old parchment */
  border-radius: 6px; /* Slightly smaller radius */
  text-transform: uppercase;
  letter-spacing: 1.5px; /* Adjusted for smaller size */
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #c8b98c; /* Slightly darker for hover effect */
    color: #fff; /* White text on hover */
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export default SmallerButton;
