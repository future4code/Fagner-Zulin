export function strigDateToTimestamp(aDate: string): number {
  const dateFormatted = aDate.split("/").reverse().join("-");
  return Date.parse(dateFormatted);
}

export function timestampToday(): number {
  const date = new Date();
  const day = date.getDate();
  const month =
    (date.getMonth() + 1).toString().length < 10
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const year = date.getFullYear();

  return Date.parse(`${year}-${month}-${day}`);
}
