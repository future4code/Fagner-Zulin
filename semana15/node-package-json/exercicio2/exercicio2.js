//Exercício 2
const oper = process.argv[2];
const firstOper = Number(process.argv[3]);
const secondOper = Number(process.argv[4]);

if (!oper || !process.argv[3] || !process.argv[4]) {
  console.log(
    "\x1b[41m  Necessário ter três argumentos: a operação e dois valores"
  );
} else {
  let result = 0;

  switch (oper) {
    case "add":
      result = firstOper + secondOper;
      console.log("\x1b[42m \x1b[30m Resposta:", result);
      break;

    case "sub":
      result = firstOper - secondOper;
      console.log("\x1b[42m \x1b[30m Resposta:", result);
      break;

    case "mult":
      result = firstOper * secondOper;
      console.log("\x1b[42m \x1b[30m Resposta:", result);
      break;

    case "div":
      result = firstOper / secondOper;
      console.log("\x1b[42m \x1b[30m Resposta:", result);
      break;

    default:
      console.log(
        "\x1b[41m  O primeiro argumento deve ser uma operação! Ex.: add, sub, mult, div"
      );
      break;
  }
}
