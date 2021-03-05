//Exercício 1

function inverteArray(array) {
  const newArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }
  return newArray;
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  return array
    .filter((item) => {
      return item % 2 === 0;
    })
    .map((item) => {
      return item * item;
    });
}

//Exercício 3

function retornaNumerosPares(array) {
  const arrayDePares = [];

  for (const item of array) {
    if (item % 2 === 0) {
      arrayDePares.push(item);
    }
  }
  return arrayDePares;
}

//Exercício 4

function retornaMaiorNumero(array) {
  const arrayOrdenado = array.sort((a, b) => {
    return b - a;
  });

  return arrayOrdenado[0];
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true];
  return respostas;
}

//Exercício 7

function retornaNNumerosPares(n) {
  let regulador = 0;
  const arrayRetorno = [];
  let contador = 0;

  while (regulador !== n) {
    if (contador % 2 === 0) {
      arrayRetorno.push(contador);
      regulador++;
    }
    contador++;
  }
  return arrayRetorno;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c && a === c) {
    return "Equilátero";
  }

  if ((a === b && a !== c) || (b === c && a !== b) || (a === c && b !== c)) {
    return "Isósceles";
  }

  if (a !== b && b !== c && a !== c) {
    return "Escaleno";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let maiorNumero = num1 > num2 ? num1 : num2;
  let menorNumero = num1 < num2 ? num1 : num2;
  let maiorDivisivelporMenor = maiorNumero % menorNumero === 0 ? true : false;
  let diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero,
    maiorDivisivelporMenor,
    diferenca,
  };
}

// Exercício 10

function segundoMaiorEMenor(array) {
  const arrayOrdenado = array.sort((a, b) => {
    return b - a;
  });

  return [arrayOrdenado[1], arrayOrdenado[arrayOrdenado.length - 2]];
}

//Exercício 11

function ordenaArray(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}

// Exercício 12

function filmeFavorito() {
  // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
  // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
