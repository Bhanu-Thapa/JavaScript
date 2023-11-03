const oneArr = [1, 2, 3, 4];
const twoArr = [5, 6, 7, 8];

// let threeArr = oneArr.concat(twoArr);
// console.log(threeArr);

// threeArr = [oneArr, twoArr];  //not work o/t [[1,2,3,4],[5,6,7,8]]
// console.log(threeArr);

// ++++++++++++++++++ Spread Operator  +++++++++++++++++++

let threeArr = [...oneArr, ...twoArr];
console.log(threeArr);
