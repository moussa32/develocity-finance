import { useEffect, useState } from "react";

const calculateDifference = date => +new Date(date) - +new Date();

const convertToDoubleNumber = number => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
};

const updateDate = date => {
  return {
    days: convertToDoubleNumber(Math.floor(calculateDifference(date) / (1000 * 60 * 60 * 24))),
    hours: convertToDoubleNumber(Math.floor((calculateDifference(date) / (1000 * 60 * 60)) % 24)),
    minutes: convertToDoubleNumber(Math.floor((calculateDifference(date) / 1000 / 60) % 60)),
    seconds: convertToDoubleNumber(Math.floor((calculateDifference(date) / 1000) % 60)),
  };
};

const useCountdown = date => {
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  const [remaining, setRemaining] = useState(updateDate(date));

  useEffect(() => {
    let updateCountdown = setInterval(() => {
      if (calculateDifference(date) > 0) {
        setRemaining(updateDate(date));
      } else {
        setIsCountdownFinished(true);
        clearInterval(updateCountdown);
      }
    }, 1000);

    return () => {
      clearInterval(updateCountdown);
      setIsCountdownFinished(false);
    };
  }, [date]);

  if (calculateDifference(date) < 0) {
    return { isFinished: true };
  }

  return { remaining, isFinished: isCountdownFinished };
};

export default useCountdown;
