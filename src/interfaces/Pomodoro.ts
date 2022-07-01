export enum PomodoroStates {
  WORKING = 'working',
  SHORT_REST = 'shortRest',
  LONG_REST = 'longRest',
}

export type PomodoroScreenStates = {
  [key in PomodoroStates]: {
    backgroundColor: string;
    icon: string;
    message: string;
  };
};

export type UsePomodoroTimeProps = {
  [key in PomodoroStates]: number;
};

export type UsePomodoroProps = UsePomodoroTimeProps & {
  maxWorkPeriods: number;
};
