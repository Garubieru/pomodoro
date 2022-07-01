import React from 'react';
import { Activity } from '@styled-icons/feather';
import { PomodoroTimerButton } from './styles';

type TimerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: typeof Activity;
};

const TimerButton: React.FC<TimerButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <PomodoroTimerButton {...rest}>
      <Icon />
    </PomodoroTimerButton>
  );
};

export default TimerButton;
