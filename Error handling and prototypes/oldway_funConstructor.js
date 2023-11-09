function Product() {
  this.name = 'hp';
  this.price = 100000;
  // same return rule as constructor
}
// empty object referal with 'this' key word
let p = new Product();
console.log(p);

/*
1. this keyword in js is diff than other language
2. this keyword refers to the context from where we called
***
if you return premitive it is ignored and we return the  object refered by this 
if return a custom obj, then  the custom obj is returned
if don't return anything, then object reffered by this is returned
*/

let x = {
  p: Product,
};
// calling context
x.p('rog', 500000);
console.log(x);

// ******************** same in function expression  *************
// ******************** arrow function not support function constructor

// the theory of this keyword pointing to calling context is not applicable with arrow function
// in arrow function this keyword has no reference exsist
let obj = {
  y: 10,
  fun() {
    y = {
      gun: () => {
        console.log(this.y);
      },
    };
    y.gun();
  },
};

obj.fun();
