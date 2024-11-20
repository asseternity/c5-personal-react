import styled from 'styled-components';

const StyledButton = styled.button`
  background: #f4e1b2; /* Paper-like background color */
  color: #3d2a1f; /* Dark brown text for an antique feel */
  font-family: 'Vinque';
  font-size: 18px;
  font-weight: bold;
  padding: 12px 30px;
  border: 2px solid #3d2a1f; /* Dark border to mimic old parchment */
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #c8b98c; /* Slightly darker for hover effect */
    color: #fff; /* White text on hover */
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default StyledButton;
