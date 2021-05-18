// a)
let minhaString: string = "Olá";
// minhaString= 1
// ao tentar atribuir um valor de um tipo diferente o
// vscode aponta um erro de tipo.

// b)
let meuNumero: number | string = 20;
//para aceitar valores do tipo string
//a variavel precisa ter os dois tipo declarados com intermedio do |

// c e d)
enum CORES {
  AZUL = "Azul",
  AMARELO = "Amarelo",
  VIOLETA = "Violeta",
  ANIL = "Anil",
  VERDE = "Verde",
  LARANJA = "Laranja",
  VERMELHO = "Vermelho",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: CORES;
};

const maria: pessoa = {
  nome: "Maria",
  idade: 20,
  corFavorita: CORES.AMARELO,
};

const paulo: pessoa = {
  nome: "Paulo",
  idade: 30,
  corFavorita: CORES.VERDE,
};

const jose: pessoa = {
  nome: "José",
  idade: 60,
  corFavorita: CORES.VERMELHO,
};

const luiz: pessoa = {
  nome: "Luiz",
  idade: 31,
  corFavorita: CORES.VIOLETA,
};
