try {
  console.log('Hello');
  console.log(a);
  console.log('try end here');
} catch (er) {
  console.log('exception handling here ' + er);
} finally {
  console.log('everytime execute this finally block');
}

console.log('end');
