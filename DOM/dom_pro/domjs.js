let btn = document.getElementById('button');

btn.addEventListener('click', colorChange);

function colorChange() {
  document.body.style.backgroundColor = randomColor();
}

const randomColor = () => {
  let hex = '0123456789ABCDEF';
  let hash = '#';

  for (let i = 0; i < 6; i++) {
    hash += hex[Math.floor(Math.random() * 16)];
  }

  return hash;
};
