import styled from 'styled-components';

type GlobalContainerProps = {
  background: string;
};

const GlobalContainer = styled.main<GlobalContainerProps>`
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 2.3rem;
`;

export default GlobalContainer;
