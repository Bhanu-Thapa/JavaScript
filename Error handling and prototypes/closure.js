let score = 4;

function one() {
  let score = 0;
  console.log(score);
}

function two() {
  let score = 1;
  console.log(score);
}

function three() {
  console.log(score);
}

// one();
// two();
// three();
// console.log(score);

function outer() {
  let outervar = 'i m at scope level 1';
  function innerfun() {
    let innervar = 'i m at scope level 2';
    console.log(outervar);
  }
  console.log(innervar);
  innerfun();
}

// outer();

let globalvalue = 0;

function fun() {
  const val1 = 1;
  console.log(globalvalue);

  function innerfun() {
    const val2 = 2;
    console.log(val2, val1, globalvalue);
    function innerofinnerfun() {
      const val3 = 3;
      console.log(val3, val2, val1, globalvalue);
    }
    innerofinnerfun();
  }
  innerfun();
}

// fun();

// CLOSURE

function superfun() {
  outervalue = 'i m outer';
  function minorfun() {
    console.log(outervalue);
  }
  minorfun();
}

// superfun();

const errormsg = 'File not found';

setTimeout(function callback() {
  console.log(errormsg);
}, 3000);

let pagecount = 0;

const items = [4, 5, 7, 8, 0];

items.forEach((i) => {
  pagecount++;
  console.log(i);
});
console.log('page count : ', pagecount);
