type informations = {
  sum: number;
  sub: number;
  mult: number;
  bigger: number;
};

function infoNumber(firstNum: number, secondNum: number): informations {
  const sum = firstNum + secondNum;
  const sub = firstNum - secondNum;
  const mult = firstNum * secondNum;
  const bigger = firstNum > secondNum ? firstNum : secondNum;

  return {
    sum,
    sub,
    mult,
    bigger,
  };
}

console.log(infoNumber(25, 14));
