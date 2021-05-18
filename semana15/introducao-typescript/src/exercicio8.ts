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

function profit(): number {
  const items: product[] = [];

  for (const product of products) {
    for (const sale of sales) {
      if (product.name === sale.dishName) {
        items.push(product);
      }
    }
  }

  const values = items.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  const costs = items.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);

  return values - costs;
}

newProduct("macarronada", 10, 20, ["macarrao", "molho de tomate"]);
newProduct("lasanha", 15, 40, ["massa", "molho de tomate", "molho branco"]);

newSale("macarronada", "Fagner");
newSale("lasanha", "João");
newSale("macarronada", "Maria");

console.log(whatIsValue("macarronada"));
console.log(profit());
