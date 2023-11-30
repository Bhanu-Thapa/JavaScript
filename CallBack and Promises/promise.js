function createPromise() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      console.log('promise pedding'); // this will run after 3s
      resolve('promise done');
      // reject('reject promise');
    }, 3000);
  });
}

console.log('start');
let x = createPromise();
console.log(x);
x.then((res) => {
  console.log(res);
})
  .catch((rej) => {
    console.log('Catch Handel', rej);
  })
  .finally(() => {
    console.log('always run');
  });

console.log('End');

// for (let i = 0; i < 10000000000; i++); // block code, after this code executed 'setTimeOut will execute'
