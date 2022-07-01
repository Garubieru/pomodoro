import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PomodoroTimerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  user-select: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PomodoroTimerDisplay = styled.h2`
  font-weight: 700;
  font-size: 10rem;
  color: ${colors.white};
  letter-spacing: 0.3rem;

  @media screen and (max-width: 768px) {
    font-size: 7rem;
  }
`;

export const PomodoroTimerButtons = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
