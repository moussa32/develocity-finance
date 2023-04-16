const numberFormatter = (local, number) => {
  const formatter = new Intl.NumberFormat(local).format(number);
  return formatter;
};

export default numberFormatter;
