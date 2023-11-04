class Product {
  // properties -> varibles -> data memeber
  product_name;
  price;
  rating;

  // behaviours -> functions -> member functions

  display_behaviour() {
    console.log('this is display behaviour');
  }
}

let p = new Product();
console.log(p);
p.display_behaviour();
