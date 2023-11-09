class Product {
  // optional here to define member data, also we can make member data into the constructor.
  // name;
  // price;
  // rate;

  // empty object referal with 'this' key word
  constructor(n, p, r) {
    console.log('calling constructor');
    this.name = n;
    this.price = p;
    this.rate = r;
    // return 10; if you're returning primitive then it will be avoided in constructor
    // return { x: 10 }; this will return because non primitive data
    // if nothing to return then it will return 'this' key value // return this
  }
  // In javascript can't create multiple constructor in other language we can create multi constructor in java and c++ its called constructor overloading

  display() {
    console.log('this is refers to ', this);
    console.log('display method here');
  }
}

let p = new Product('Bmw', 10000000, 5); // 'new' creates empty plain object
// -> in the above piece of code we are calling constructor method
// THIS KEY WORD point this empty object
console.log(p);
p.display();

/*
1. this keyword in js is diff than other language
2. this keyword refers to the context from where we called
***
if you return premitive it is ignored and we return the  object refered by this 
if return a custom obj, then  the custom obj is returned
if don't return anything, then object reffered by this is returned
*/
