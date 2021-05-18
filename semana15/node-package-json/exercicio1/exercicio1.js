/**
 * a) Os parametros passados pelo terminal podem ser acessados pelo
 * process.argv[i], onde i é a posição do array onde se encontra o
 * valor que se quer acessar
 */

//b e c
const personName = process.argv[2];
const age = process.argv[3];

if (!personName || !age) {
  console.log(
    "\x1b[41m Está faltando algum argumento, preciso do nome e da idade"
  );
} else {
  console.log(`\x1b[42m \x1b[30m Olá, ${personName}! Você tem ${age} anos.`);
  const futureAge = Number(age) + 7;
  console.log(
    `\x1b[43m \x1b[30m Olá, ${personName}! Você tem ${age} anos. Em sete anos você terá ${futureAge} anos`
  );
}
