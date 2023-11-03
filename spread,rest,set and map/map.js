//+++++++++++++++++++++  MAP  +++++++++++++++++++++

let map = new Map();
console.log(map);
console.log(map.size);

let arr = [
  [1, 'bhanu'],
  [2, 'taddy'],
];

function fun(arr) {
  arr.map((arrIT) => {
    map.set(arrIT[0], arrIT[1]);
  });
}
fun(arr);
console.log(map);
