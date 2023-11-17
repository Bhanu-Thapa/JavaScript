class Product {
  #name;
  constructor(n) {
    console.log('into constructor');
    this.#name = n;
  }

  // static method always access from Class
  static sta() {
    console.log('into static');
  }

  display() {
    console.log('into display');
  }
}

let p = new Product('taddy');

console.log(p);
p.display();
Product.sta();
p.name = 'bhanu';
console.log(p.name);
