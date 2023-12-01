function createPromise() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      console.log('timer done');
      resolve('Promise resolve');
      // reject('Promise Reject');
    }, 3000);
  });
}

// console.log('start ');
// let x = createPromise();
// x.then((value) => {
//   console.log('done', value);
// }).catch((val) => {
//   console.log('error', val);
// });
// console.log('end');

async function consume() {
  try {
    let res = await createPromise();
    console.log('done', res);
  } catch (er) {
    console.log('error', er);
  }
}

console.log('start');
consume();
console.log('end');
