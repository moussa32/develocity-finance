const convertToDoubleNumber = number => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
};

export const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`2/25/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: convertToDoubleNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: convertToDoubleNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: convertToDoubleNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: convertToDoubleNumber(Math.floor((difference / 1000) % 60)),
    };
  }

  return timeLeft;
};
