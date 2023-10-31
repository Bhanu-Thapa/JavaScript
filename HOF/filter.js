let arr = ['mapfun', 'filterfun', 'sortfun', 'forEach', 'for'];

let newArr = arr.filter((ele) => {
  return ele.endsWith('fun');
});

console.log(arr);
console.log(newArr);
