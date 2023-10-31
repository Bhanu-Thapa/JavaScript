// REGULAR EXPRESSION
let pattern = 'pw';

let regexOne = new RegExp(pattern);

let flag = 'gi';

let regexTwo = new RegExp(pattern, flag);

// FLAG IN VERY VERY IMPORTANT
let regexThree = /pw/gi;

const strCheck = 'pwskill here upgrad your skills with pw lectures ';

const result = regexThree.test(strCheck); // RETURN IN BOOLEAN VALUE
console.log(result);

////////////////////////

const anotherResult = strCheck.match(regexThree);
console.log(anotherResult);

///////////////////////////

const oneMoreResult = strCheck.replace(regexThree, 'p-w');
console.log(oneMoreResult);

//////////////////

const url = 'https://bhanuthapa.com/tad%20dy';
const res = url.replace(/%\d0/, '-'); // *** FLAG IMPORTANT
console.log(res);
