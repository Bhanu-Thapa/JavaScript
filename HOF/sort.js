let arr = [2, 3, 34, 7, 43, 5];

arr.sort();
console.log(arr);

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

arr.sort((a, b) => {
  return b - a;
});
console.log(arr);
