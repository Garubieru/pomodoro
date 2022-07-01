import React from 'react';

import {
  PomodoroTimerButtons,
  PomodoroTimerDisplay,
  PomodoroTimerWrapper,
} from './styles';
import { Play, Pause, Coffee, Briefcase, Moon } from '@styled-icons/feather';
import TimerButton from '../TimerButton';
import { formatTime } from '../../../utils/formatTime';
import { PomodoroStates } from '../../../interfaces/Pomodoro';

type PomodoroTimerProps = {
  isPaused: boolean;
  timer: number;
  resumeTimer: () => void;
  changePomodoroState: (state: PomodoroStates) => void;
  pomodoroState: PomodoroStates;
};

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  isPaused,
  timer,
  resumeTimer,
  changePomodoroState,
  pomodoroState,
}) => {
  return (
    <PomodoroTimerWrapper>
      <PomodoroTimerDisplay>{formatTime(timer)}</PomodoroTimerDisplay>
      <PomodoroTimerButtons>
        <TimerButton icon={isPaused ? Play : Pause} onClick={resumeTimer} />
        {pomodoroState !== PomodoroStates.SHORT_REST && (
          <TimerButton
            icon={Coffee}
            onClick={() => changePomodoroState(PomodoroStates.SHORT_REST)}
          />
        )}
        {pomodoroState !== PomodoroStates.WORKING && (
          <TimerButton
            icon={Briefcase}
            onClick={() => changePomodoroState(PomodoroStates.WORKING)}
          />
        )}
        {pomodoroState !== PomodoroStates.LONG_REST && (
          <TimerButton
            icon={Moon}
            onClick={() => changePomodoroState(PomodoroStates.LONG_REST)}
          />
        )}
      </PomodoroTimerButtons>
    </PomodoroTimerWrapper>
  );
};

export default PomodoroTimer;
