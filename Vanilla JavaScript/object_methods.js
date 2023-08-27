let emp = {
  id: 101,
  name: 'sanket',
  age: 24,
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

//no adding no updating no delete
// Object.freeze(emp);
// delete emp.id;
// emp.id = 100;
// console.log(emp);

Object.seal(emp); //only updating no adding no delete
emp.id = 100;
emp.add = 'adf';
delete emp.id;
console.log(emp);

let o = Object.assign({ x: 16 }, emp);
console.log(o);
