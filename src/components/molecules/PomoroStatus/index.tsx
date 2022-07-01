import React from 'react';

import {
  PomodoroStatusContainer,
  PomodoroIconStatus,
  PomodoroMessageStatus,
} from './styles';

type PomodoroStatus = {
  icon: string;
  message: string;
};

const PomoroStatus: React.FC<PomodoroStatus> = (props) => {
  return (
    <PomodoroStatusContainer>
      <PomodoroIconStatus>{props.icon}</PomodoroIconStatus>
      <PomodoroMessageStatus>{props.message}</PomodoroMessageStatus>
    </PomodoroStatusContainer>
  );
};

export default PomoroStatus;
