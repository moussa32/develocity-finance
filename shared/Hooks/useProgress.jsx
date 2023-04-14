import { useState, useEffect } from "react";

function useProgress({ max, startPoint = 0, stepper = 1, duration = 1 }) {
  const [progress, setProgress] = useState(startPoint);

  useEffect(() => {
    let intervalId;
    if (progress < max) {
      intervalId = setInterval(() => {
        setProgress(prevProgress => prevProgress + stepper);
      }, duration);
    }
    return () => clearInterval(intervalId);
  }, [max, startPoint, stepper, duration, progress]);

  return { progress: progress >= max ? max : progress };
}

export default useProgress;
