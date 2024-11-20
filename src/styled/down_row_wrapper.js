import styled from 'styled-components';

const DownRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.textColor || 'black'};
`;

export default DownRowWrapper;
