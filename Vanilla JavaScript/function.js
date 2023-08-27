//  NORMAL FUCTION

function greet() {
  console.log('hello world');
}

greet();

function squ(x) {
  // console.log(x * x);
  return x * x;
}

let a = squ(5);
console.log(a);

function fun1(x, y = 10) {
  return x + y;
}

console.log(fun1(3));

function arr([i1, i2]) {
  console.log(i1 + i2);
}

num = [3, 5];

arr(num);

function sumofallpara() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let result = sumofallpara(1, 2, 3, 4, 5);
console.log(result);
