let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "twix", price: 1.98 },
  { product: "skittles", price: 1.24 },
];
function printCheapCandy(products, price) {
  for (let i = 0; i < products.length; i++) {
    const candy = products[i];
    if (candy.price < price) {
      console.log(candy.product);
    }
  }
}

// printCheapCandy(products, 4)

function searchCandy(products, name) {
  for (let i = 0; i < products.length; i++) {
    const candy = products[i];
    if (candy.product.indexOf(name) !== -1) {
      console.log(candy.product);
    }
  }
}
searchCandy(products, "Swedish Fish");
// function candySearch(products.name) {
//     for (let i = 0; i < products.length; i++) {
//         const candy = products[i];
//         if (candy.product.indexOf(name) i= -1) {
//             console.log(`we do carry $`);
//         }
//     }
// }
