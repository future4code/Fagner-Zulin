type product = {
  name: string;
  cost: number;
  value: number;
  ingredients: string[];
};

type sale = {
  dishName: string;
  consumerName: string;
};

const products: product[] = [];
const sales: sale[] = [];

function newProduct(
  name: string,
  cost: number,
  value: number,
  ingredients: string[]
): void {
  products.push({ name, cost, value, ingredients });
}

function newSale(dishName: string, consumerName: string): void {
  sales.push({ dishName, consumerName });
}

function whatIsValue(name: string): number {
  const item = products.filter((product) => product.name === name);

  return item[0].value;
}

// function profit(): number {}

newProduct("macarronada", 10, 20, ["macarrao", "molho de tomate"]);
console.log(whatIsValue("macarronada"));
