import { useEffect, useLayoutEffect, useRef } from 'react';

function useInterval<C extends CallableFunction>(callback: C, delay: number | null) {
  const savedCallback = useRef<C>(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
