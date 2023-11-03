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

// +++++++++++++++++++++++++++++++++++++++++++

// function setdif(setA, setB) {
//   return new Set(
//     setA.filter((ele) => {
//       !setB.has(ele);
//     })
//   );
// }

// setdif(3, 6);
