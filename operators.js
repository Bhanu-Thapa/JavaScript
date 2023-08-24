//  #1
let num = 5;
// let sum = 0;
for (n = 1; n <= 10; n++) {
  // sum = num * n;
  console.log(` ${num} * ${n} = ${num * n}`);
  // console.log((sum = num * n));
}

// #2

let num1 = 10;
let num2 = 5;

// add

console.log(num1 + num2);
// 15

// sub
console.log(num1 - num2);
// 5

// multi
console.log(num1 * num2);
// 50

// div

console.log(num1 / num2);
// 2

// mod
console.log(num1 % num2);
// 0

// exponentiation

console.log(num1 ** num2);
// 100000

// # 3

let length = 10;
let width = 20;

// let perimeter = 2 * (length + width);

console.log(
  `perimeter of the rectangle  with length : ${length} and width : ${width} is ${
    2 * (length + width)
  }`
);

// #3

let num3 = 12;
let num4 = 15;

console.log(num3 == num4);
console.log(num3 === num4);
console.log(num3 != num4);
console.log(num3 > num4);
console.log(num3 >= num4);
console.log(num3 < num4);
console.log(num3 <= num4);
console.log(num3 !== num4);
