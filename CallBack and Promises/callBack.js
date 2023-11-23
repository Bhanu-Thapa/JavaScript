function h(x, fn) {
  // h -> hof
  // fn -> call back
  console.log(x * x);
  fn(x);
}

h(12, function fun() {
  console.log('call back function 1');
});

h(24, fn);
function fn(n) {
  console.log('call back function 2 :', n);
}

// ///////// ASYNC ///////////////

console.log('start');

setTimeout(() => {
  console.log('timer 1');
}, 3000);
setTimeout(() => {
  console.log('timer 3');
}, 0);
setTimeout(() => {
  console.log('timer 2');
}, 1000);

console.log('end');
for (let i = 0; i < 1000000000; i++);
