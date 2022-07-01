import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PomodoroTimerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  cursor: pointer;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  width: 4.4rem;
  height: 4.4rem;
  padding: 0.7rem;
  font-weight: bold;

  background: transparent;
  outline: none;

  &:hover {
    color: ${colors.black};
    background: ${colors.white};
    border-color: ${colors.backgroundDark};
  }

  &:disabled {
    background: ${colors.white}40;
  }
  transition: all 0.3s;
`;
