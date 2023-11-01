let p = document.querySelector('p');

window.addEventListener('keydown', () => {
  let input = document.querySelector('input');

  setTimeout(() => {
    let split = input.value.split('');

    let rev = split.reverse();

    let join = rev.join('');

    p.innerText = join;
  }, 2000);
});
