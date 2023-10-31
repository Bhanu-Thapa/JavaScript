let cartBil = [20, 30, 50];

let sumBill = cartBil.reduce((prev, curr) => {
  return (prev += curr);
}, 0);

console.log(sumBill);
