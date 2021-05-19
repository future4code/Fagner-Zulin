type products = {
  name: string;
  price: number;
  type: string;
  priceWithDiscount?: number;
};

function priceWithDiscount(products: products[]): products[] {
  return products.map((product) => {
    if (product.type === "verão") {
      return {
        ...product,
        priceWithDiscount: discount(product.price, 5),
      };
    }

    if (product.type === "inverno") {
      return {
        ...product,
        priceWithDiscount: discount(product.price, 10),
      };
    }

    if (product.type === "banho") {
      return {
        ...product,
        priceWithDiscount: discount(product.price, 4),
      };
    }

    if (product.type === "íntimas") {
      return {
        ...product,
        priceWithDiscount: discount(product.price, 7),
      };
    }
  });
}

function discount(price: number, percent: number) {
  return (price * (100 - percent)) / 100;
}

console.table(
  priceWithDiscount([
    { name: "camisa", price: 14, type: "verão" },
    { name: "blusa", price: 50, type: "inverno" },
  ])
);
