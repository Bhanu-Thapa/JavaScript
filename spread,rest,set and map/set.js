let emptySet = new Set();

console.log(emptySet);
console.log(emptySet.size);
console.log(typeof emptySet);

let myArray = [1, 2, 3, 4, 5, 5, 2];

let newSet = new Set(myArray);
console.log(newSet);

// let nSET = new Set([...myArray]);
// console.log(nSET);

newSet.add(9);
console.log(newSet);

console.log(newSet.has(9)); // O/P IN BOOLEAN VALUE
newSet.clear();
console.log(newSet);

// +++++++++++++++ TWO ARRAY CONVERT IN SET AND FILTER SET OF DUPLICACY +++++++++++++++++++++

console.log('/////////////////////');

function setdif(setX, setY) {
  let setA = new Set(setX);
  let setB = new Set(setY);
  console.log(setA);
  console.log(setB);
  [...setA].filter((el) => console.log(!setB.has(el)));
}

setdif([1, 2, 3, 4], [4, 6, 7, 8]);
