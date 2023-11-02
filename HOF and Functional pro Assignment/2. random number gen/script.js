let timeoutId = setTimeout(() => {
  console.log('Hello ');
  clearInterval(stopin);
}, 3000);

let countdown = timeoutId._idleTimeout / 1000;
console.log(countdown);

let stopin = setInterval(() => {
  if (countdown !== 1) {
    countdown = countdown - 1;
    console.log(countdown);
  }
}, 1000);
