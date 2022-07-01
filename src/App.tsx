import React from 'react';
import Pomodoro from './components/organisms/Pomodoro';

const App: React.FC = () => {
  return (
    <Pomodoro workTime={10} shortRestTime={5} longRestTime={20} maxWorkPeriods={2} />
  );
};

export default App;
