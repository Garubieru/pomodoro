import React from 'react';
import PomodoroContainer from '../../molecules/PomodoroContainer';
import PomodoroStatus from '../../molecules/PomoroStatus';

import { formatTime } from '../../../utils/formatTime';
import usePomodoro from '../../../hooks/usePomodoro';

import { PomodoroInfos, PomodoroInfoItem } from './styles';
import PomodoroTimer from '../../molecules/PomodoroTimer';

type PomodoroProps = {
  workTime: number;
  shortRestTime: number;
  longRestTime: number;
  maxWorkPeriods: number;
};

const Pomodoro: React.FC<PomodoroProps> = ({
  workTime,
  shortRestTime,
  longRestTime,
  maxWorkPeriods,
}) => {
  const {
    pomodoroScreenState,
    timer,
    totalWorkingTime,
    isPaused,
    cycles,
    pomodoroState,
    workPeriods,
    resumeTimer,
    changePomodoroState,
  } = usePomodoro({
    working: workTime,
    shortRest: shortRestTime,
    longRest: longRestTime,
    maxWorkPeriods,
  });
  const { backgroundColor, icon, message } = pomodoroScreenState;

  return (
    <PomodoroContainer background={backgroundColor}>
      <PomodoroStatus icon={icon} message={message} />
      <PomodoroTimer
        pomodoroState={pomodoroState}
        timer={timer}
        isPaused={isPaused}
        resumeTimer={resumeTimer}
        changePomodoroState={changePomodoroState}
      />
      <PomodoroInfos>
        <PomodoroInfoItem>Cycles: {cycles}</PomodoroInfoItem>
        <PomodoroInfoItem>
          Total working time: {formatTime(totalWorkingTime)}
        </PomodoroInfoItem>
        <PomodoroInfoItem>Time blocks (Pomodoros): {workPeriods}</PomodoroInfoItem>
      </PomodoroInfos>
    </PomodoroContainer>
  );
};

export default Pomodoro;
