// ARROW FUNCTION

const square = (x) => x * x;

console.log(square(3));

const sum = (i, j) => {
  return i + j;
};

console.log(sum(6, 4));

// Anoynomus function

let x = function () {
  console.log('hiii');
};

x();

// iife
// self invoking function

(function exe() {
  console.log('imediate');
})();

(function (x) {
  console.log(x);
})(3);

// ANONYMOUS  Expression FUNCTION

let y = function () {
  console.log('hiii');
};

y();

// NAMED Expression FUNCTION

let z = function nam() {
  console.log('hello');
};

z();
