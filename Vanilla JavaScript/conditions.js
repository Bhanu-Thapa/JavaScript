// #1

let trafficlight = 'red';

if (trafficlight == 'green') {
  console.log('go');
} else if (trafficlight == 'yellow') {
  console.log('look');
} else if (trafficlight == 'red') {
  console.log('vehicles must stop');
} else {
  console.log('invaild light');
}

// #2

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(num);
} else {
  console.log('num2 is greater than num1');
}

// #3

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log('FizzBuzz');
} else if (num % 3 === 0) {
  console.log('Fizz');
} else if (num % 5 === 0) {
  console.log('Buzz');
} else {
  console.log('invalid');
}

//  Switch Case

// #1

const monthnum = 2;

switch (monthnum) {
  case 1:
    console.log('jan');
    break;
  case 2:
    console.log('feb');
    break;
  case 3:
    console.log('mar');
    break;
  default:
    console.log('invalid data');
}

// TERNARY CONDITIONS

let n1 = 10;
let n2 = 20;

n1 === n2
  ? console.log('both are equal')
  : n1 > n2
  ? console.log('n1 is greater than n2')
  : console.log('n2 is greater than n1');
