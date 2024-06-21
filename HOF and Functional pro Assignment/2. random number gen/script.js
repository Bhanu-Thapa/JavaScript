let para = document.getElementsByClassName('para'); // Removed the dot before the class name
let head = document.querySelector('.head');

function start() {
  let i = 3;
  const intervalId = setInterval(() => {
    console.log(i);
    for (let j = 0; j < para.length; j++) {
      // Loop through the HTMLCollection
      para[j].innerHTML = i;
    }
    i--;
    if (i < 0) {
      clearInterval(intervalId); // Clear the interval once i becomes less than 0
    }
  }, 1000);
}

start();
