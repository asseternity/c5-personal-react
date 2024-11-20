import styled from 'styled-components';

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  color: ${(props) => props.textColor || 'black'};
`;

export default CenteredWrapper;
