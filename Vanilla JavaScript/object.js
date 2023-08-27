let obj = {
  id: 101,
  name: 'alex',
  salary: 10000,
};

console.log(obj);

let emp = new Object();
console.log(emp);

emp.id = 102;
emp.name = 'sam';
console.log(emp);

function Emp(i, n, s) {
  this.id = i;
  this.name = n;
  this.salary = s;
}

const e = new Emp(103, 'joker', 12000);
console.log(e);

//

console.log(emp.id);
console.log(emp['name']);

emp.salary = 30000;
console.log(emp);
emp['salary'] = 40000;
console.log(emp);

emp.id = 13;
emp['name'] = 'bhanu';
console.log(emp);

delete emp.id;
console.log(emp);
