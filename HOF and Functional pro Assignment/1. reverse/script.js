// let p = document.querySelector('p');

// window.addEventListener('keydown', () => {
function start() {
  let input = document.querySelector('input');

  setTimeout(() => {
    // let split = input.value.split('');

    // le rev =t split.reverse();

    // let join = rev.join('');

    // p.innerText = join;

    let split = input.value.split('');

    let newArray = new Array();
    for (let i = 0; i < split.length - 1; i++) {
      console.log(split.length);
      newArray.push(split[split.length - i]);
    }
    console.log(newArray);
    p.innerText = newArray;
  }, 2000);
  // });
}
