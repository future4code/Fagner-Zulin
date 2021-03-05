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
  const nome = "O Diabo Veste Prada";
  const ano = 2006;
  const diretor = "David Frankel";
  const atores = [
    "Meryl Streep",
    "Anne Hathaway",
    "Emily Blunt",
    "Stanley Tucci",
  ];

  return {
    nome,
    ano,
    diretor,
    atores,
  };
}

// Exercício 13

function imprimeChamada() {
  const { nome, ano, diretor, atores } = filmeFavorito();
  return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores.join(
    ", "
  )}.`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  return {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO";
  return pessoa;
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
  return arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 20;
  });
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  return arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 20;
  });
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  return array.map((item) => {
    return item * 2;
  });
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  return array.map((item) => {
    return String(item * 2);
  });
}

// Exercício 17, letra C

function verificaParidade(array) {
  return array.map((item) => {
    return item % 2 === 0 ? `${item} é par` : `${item} é ímpar`;
  });
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

function retornaPessoasAutorizadas() {
  return pessoas.filter((pessoa) => {
    const { idade, altura } = pessoa;
    return idade >= 14 && idade < 60 && altura >= 1.5;
  });
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  return pessoas.filter((pessoa) => {
    const { idade, altura } = pessoa;
    return idade < 14 || idade > 60 || altura < 1.5;
  });
}

//Exercício 19

const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "04/11/2019",
  },
];

function retornaEmailConsulta() {
  return consultas.map((consulta) => {
    const { nome, genero, cancelada, dataDaConsulta } = consulta;

    const pronomeTratamento = genero === "feminino" ? "Sra." : "Sr.";
    const generoLembrar = genero === "masculino" ? "lembrá-lo" : "lembrá-la";

    if (cancelada) {
      return `Olá, ${pronomeTratamento} ${nome}. Infelizmente sua consulta marcada para o dia ${dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`;
    } else {
      return `Olá, ${pronomeTratamento} ${nome}. Estamos enviando esta mensagem para ${generoLembrar} da sua consulta no dia ${dataDaConsulta}. Por favor, acuse o recebimento deste-email.`;
    }
  });
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
  contas.forEach((conta) => {
    if (conta.compras.length !== 0) {
      conta.saldoTotal = conta.compras.reduce((acc, curr) => {
        return acc - curr;
      }, conta.saldoTotal);
    }
  });
  return contas;
}
