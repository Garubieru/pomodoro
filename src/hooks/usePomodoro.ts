import { useState } from 'react';
import { useSound } from 'use-sound';
import { PomodoroStates, UsePomodoroProps } from '../interfaces/Pomodoro';
import { POMODORO_SCREEN_STATES } from '../constants/PomodoroScreenStates';
import useInterval from './useInterval';
import restSound from '../sounds/rest.mp3';
import work from '../sounds/work.mp3';

export default function usePomodoro(props: UsePomodoroProps) {
  const [pomodoroState, setPomodoroState] = useState<PomodoroStates>(
    PomodoroStates.WORKING,
  );
  const [timer, setTimer] = useState<number>(props.working);
  const [totalWorkingTime, setTotalWorkingTime] = useState<number>(0);
  const [workPeriods, setWorkPeriods] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [playRestAlarm] = useSound(restSound);
  const [playWorkAlarm] = useSound(work);

  const pomodoroScreenState = POMODORO_SCREEN_STATES[pomodoroState];
  const hasReachedMaxPeriods = (workPeriods + 1) % props.maxWorkPeriods === 0;
  const cycles = Math.trunc(workPeriods / props.maxWorkPeriods);

  const changePomodoroState = (state: PomodoroStates) => {
    setPomodoroState(state);
    setTimer(props[state]);
  };

  const resumeTimer = () => setIsPaused((paused) => !paused);

  const countTotalWorkTime = (): void => {
    if (pomodoroState === PomodoroStates.WORKING) {
      setTotalWorkingTime((prevState) => prevState + 1);
    }
  };

  useInterval(
    () => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
      countTotalWorkTime();

      if (timer > 1) return;

      if (pomodoroState === PomodoroStates.WORKING) {
        setWorkPeriods((prevState) => prevState + 1);
        changePomodoroState(
          hasReachedMaxPeriods ? PomodoroStates.LONG_REST : PomodoroStates.SHORT_REST,
        );
        playRestAlarm();
        return;
      }
      changePomodoroState(PomodoroStates.WORKING);
      playWorkAlarm();
    },
    isPaused ? null : 1000,
  );

  return {
    timer,
    totalWorkingTime,
    cycles,
    workPeriods,
    hasReachedMaxPeriods,
    pomodoroState,
    pomodoroScreenState,
    isPaused,
    resumeTimer,
    changePomodoroState,
  };
}
