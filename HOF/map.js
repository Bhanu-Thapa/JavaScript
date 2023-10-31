let frd = ['akshata', 'avinash', 'bhavesh', 'deepam'];

frd.map((ele, index, arr) => {
  console.log(ele, index, arr);
});

///////////////////////

frd.map((ele) => {
  console.log(ele.toUpperCase());
});

// const newfrd = frd.map((ele) => {
//   console.log(ele.toUpperCase());
//   return ele.toUpperCase();
// });

// console.log(newfrd);
// console.log(typeof newfrd);
