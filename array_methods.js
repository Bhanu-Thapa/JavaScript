let arr = [1, 2, 3, 4, 5];

arr.push(6, 7);
console.log(arr);

let l = arr.pop();
console.log(l);
console.log(arr);

let f = arr.shift();
console.log(f);
console.log(arr);

arr.unshift(1);
console.log(arr);

let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5];
let a3 = a1.concat(a2);
console.log(a3);

let s = a3.join(' ');
console.log(s);

a3.reverse();
console.log(a3);

console.log(a3.indexOf(5)); // finding index through value

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(2, 3)); // extracting number through index

arr1.splice(2, 1, 7, 8); // upadtion , deletion , adding 7 and 8
console.log(arr1);
