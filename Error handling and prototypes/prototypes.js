let myheros = ['thor', 'spiderman'];
let mydcheros = ['batman', 'superman'];
let power = {
  thor: 'hammer',
  superman: 'natural power',
  style: function () {
    console.log(`hand combat ${this.superman}`);
  },
};

Object.prototype.fight = () => {
  console.log('new object proto here');
};

console.log(myheros.fight());
console.log(power.fight());

Array.prototype.wight = function () {
  console.log('new array proto here');
};

console.log(myheros.wight());
// console.log(power.wight());

// INHERITANCE

const User = {
  name: 'top up',
  email: 'top@gmail.com',
};

const Teacher = {
  makevideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAAssistant = {
  makeAssignment: 'js Assignment',
  fulltime: true,
  // __proto__: teachingSupport,   // old way to inherit
};

Teacher.__proto__ = User;
console.log(Teacher.name);
// console.log(TAAssistant.isAvailable);

// modern way to inherit

Object.setPrototypeOf(teachingSupport, Teacher);
console.log(Teacher.isAvailable);

String.prototype.trueLength = function () {
  console.log(`true length ${this.trim().length}`);
};

console.log('hello  '.trueLength());
console.log('taddy here'.trueLength());

// checking
const s = '               taddy here            ';
console.log(s.trim().length);
