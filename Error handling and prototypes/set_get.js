class Rate {
  #start = 10;

  // getRating() {
  //   console.log(this.#start);
  // }
  // setRating(r) {
  //   if (r < 10) this.#start = r;
  //   console.log(this.#start);
  // }

  get RatingGetter() {
    console.log(this.#start);
  }
  set RatingSetter(r) {
    if (r < 10) this.#start = r;
    console.log(this.#start);
  }
}

let p = new Rate();

p.RatingGetter;
p.RatingSetter = 9;

console.log('///////////////////////////////////////');

// COMPLEX NUMBER

class ComplexNumber {
  #real;
  #imag;
  constructor(r, i) {
    this.#real = r;
    this.#imag = i;
  }

  display() {
    console.log('real num', this.#real, 'imagine number', this.#imag);
  }

  get real() {
    return this.#real;
  }
  get imag() {
    return this.#imag;
  }

  addcomplexNumber(c) {
    this.#real += c.real;
    this.#imag += c.imag;
  }
}

const c1 = new ComplexNumber(2, 5);
c1.display();
const c2 = new ComplexNumber(4, 3);
c2.display();
c1.addcomplexNumber(c2);
c1.display();
