import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  cursor: pointer;
  border: 2px solid ${colors.backgroundDark};
  color: ${colors.black};
  width: 4.4rem;
  height: 4.4rem;
  padding: 0.5rem;
  font-weight: bold;

  background: ${colors.white};

  &:hover {
    color: ${colors.white};
    background: ${colors.backgroundDark};
    border-color: ${colors.white};
  }
  transition: all 0.3s;
`;
