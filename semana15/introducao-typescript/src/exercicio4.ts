//a)
/**
 * usaria o comando tsc exercicio4.ts
 */

//b
/**
 * caso haja a pasta src, é necessário informar o caminho do arquivo
 */

//c)
/**
 * para transpilar varios arquivos de uma vez é possivel usar o
 * src sem paramentros
 * ou tsc src/*.ts
 */

//d
/**
 * Temos a mudança da versão do js para o es6
 * a configuração a mais do: sorceMap, outDir, rootDir
 * remove comments e no implicit any
 */

type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};
