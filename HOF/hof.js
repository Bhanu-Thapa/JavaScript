const powertwo = (n) => {
  return n ** 2;
};

function powercube(powertwo, n) {
  return powertwo(n) * n;
}

console.log(powercube(powertwo, 3));

////////////////////////////////////////
function sayhello() {
  return () => {
    console.log('hello Bhanu');
  };
}

const guessvalue = sayhello();
console.log(guessvalue);
guessvalue();

//

const higherOrder = (n) => {
  const OneFun = (m) => {
    const TwoFun = (h) => {
      return n + m + h;
    };
    return TwoFun;
  };
  return OneFun;
};

console.log(higherOrder(2)(3)(4));

//

const myNums = [3, 5, 6, 2, 10];

const sumArray = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};

console.log(sumArray(myNums));

// //////////

function oneMoreHello() {
  console.log('hiii Bhanu', Math.random());
}

setInterval(oneMoreHello, 2000); // occur  after every 2 Sec
setTimeout(oneMoreHello, 3000); // after 3 sec run this function
