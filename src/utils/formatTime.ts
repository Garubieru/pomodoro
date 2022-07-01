export function formatTime(time: number): string {
  const timeToString = (number: number): string => {
    return Math.trunc(number).toString().padStart(2, '0');
  };

  const timeMinutes = time % 3600;
  const hours = Math.trunc(time / 3600);
  const hoursString = hours !== 0 ? `${timeToString(hours)}:` : '';
  const minutes = timeToString(Math.trunc(timeMinutes / 60));
  const seconds = timeToString(Math.trunc(timeMinutes % 60));
  return `${hoursString}${minutes}:${seconds}`;
}
