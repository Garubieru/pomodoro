import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const Container = styled.div`
  background: ${colors.backgroundDark};
  color: ${colors.black};
  padding: 3rem;
  border-radius: 0.8rem;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Container;
