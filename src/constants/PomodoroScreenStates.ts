import { PomodoroScreenStates, PomodoroStates } from '../interfaces/Pomodoro';
import { colors } from '../styles/colors';

export const POMODORO_SCREEN_STATES: PomodoroScreenStates = {
  [PomodoroStates.WORKING]: {
    backgroundColor: colors.backgroundWork,
    icon: '💼',
    message: 'Time to work!',
  },
  [PomodoroStates.LONG_REST]: {
    backgroundColor: colors.backgroundLongRest,
    icon: '😴',
    message: 'Taking a long rest...',
  },
  [PomodoroStates.SHORT_REST]: {
    backgroundColor: colors.backgroundRest,
    icon: '☕',
    message: 'Taking a breath...',
  },
};
