export const formatData = (date: Date): string => {
  const dateFormatted = `${addZero(date.getDate())}/${addZero(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;

  return dateFormatted;
};

function addZero(value: number): string | number {
  if (value <= 9) {
    return "0" + value;
  } else {
    return value;
  }
}
