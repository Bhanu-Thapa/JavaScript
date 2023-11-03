function manyArg(...arrg) {
  console.log(typeof arrg);
  let finalArr = arrg.map((e) => e);
  console.log(finalArr);
}

manyArg(1, 2, 3, 4);

// +++++++++++++++++++++++++++++++++

// function arrg() {
//   console.log(arguments);
// }

// arrg(1, 2, 3, 4);

// ++++++++++++++++++++++++++++++++++

// function manyArr() {
//   let arg = Array.from(arguments);
//   console.log(arg);
//   let finalArr = arg.map((e) => e);
//   console.log(finalArr);
// }

// manyArr(1, 2, 3, 4);
