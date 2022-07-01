import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PomodoroStatusContainer = styled.div`
  font-weight: 700;
  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
`;

export const PomodoroIconStatus = styled.span`
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const PomodoroMessageStatus = styled.h1`
  font-size: 2.5rem;
  color: ${colors.white};

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
