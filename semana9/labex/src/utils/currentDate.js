function currentDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 pois no getMonth Janeiro começa com zero.
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export default currentDate;
