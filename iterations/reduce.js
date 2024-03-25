const myNums = [1, 2, 3];

//      .reduce((accumalator, currentValue) =>{},0 **we can give any value in place of 0 which will be assign to accumalator**)

const myTotal = myNums.reduce((acc, currval) => {
  //   console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "data science course",
    price: 999,
  },
  {
    itemName: "Data science course",
    price: 999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
  console.log(`acc ${acc} :-- item price ${item.price}`);
  return acc + item.price;
}, 0);

console.log(priceToPay);
