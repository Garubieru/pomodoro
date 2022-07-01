import React from 'react';
import Container from '../../atoms/Container';
import GlobalContainer from '../../atoms/GlobalContainer';

type PomodoroContainerProps = {
  background: string;
  children: React.ReactChild | React.ReactChild[];
};

const PomodoroContainer: React.FC<PomodoroContainerProps> = ({
  background,
  children,
}) => {
  return (
    <GlobalContainer background={background}>
      <Container>{children}</Container>
    </GlobalContainer>
  );
};

export default PomodoroContainer;
