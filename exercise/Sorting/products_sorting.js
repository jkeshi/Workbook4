let products = [
  { product: "Twix", price: 1.70 },
  { product: "Kit Kat", price: 2.98 },
  { product: "sour Patch Kids", price: 3.97 },
  { product: "Snickers", price: 2.98 },
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "skittles", price: 1.24 },
];


products.sort(function(a,b) {
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;    
});

console.log(products);

console.log("--------------");

products.sort(function (a,b) {
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1; 
    {
 }};

 console.log(products);

