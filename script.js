let limit = 16;
let normalOption = true;
let rainbowOption = false;
let darkeningOption = false;

const container = document.querySelector('.container');
const size = document.querySelector('button');
const normalDraw = document.querySelector('#normal');
const rainbowDraw = document.querySelector('#rainbow');
const darkeningDraw = document.querySelector('#darkening');

function newGrid() {
  for (let i = 0; i < limit; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < limit; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      if (normalOption) {
        square.style.backgroundColor = 'black';
        square.style.opacity = 1;
      }
      if (rainbowOption) {
        let r = getRandomInt();
        let g = getRandomInt();
        let b = getRandomInt();
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        square.style.opacity = 1;
      }
      if (darkeningOption) {
        square.style.background = 'black';
        let currentSquareOpacity = Number(square.style.opacity);
        let newOpacity = currentSquareOpacity + 0.1;
        square.style.opacity = String(newOpacity);
      }
    });
  });
}

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

function reset() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  newGrid();
}

size.addEventListener('click', () => {
  let changeSize = prompt('Type a number (1-100).');
  while (changeSize < 1 || changeSize > 100) {
    changeSize = prompt('Error. Type a number again (1-100).');
  }
  limit = changeSize;
  reset();
});

normalDraw.addEventListener('click', () => {
  normalOption = true;
  rainbowOption = false;
  darkeningOption = false;
  reset();
});

rainbowDraw.addEventListener('click', () => {
  normalOption = false;
  rainbowOption = true;
  darkeningOption = false;
  reset();
});

darkeningDraw.addEventListener('click', () => {
  normalOption = false;
  rainbowOption = false;
  darkeningOption = true;
  reset();
});

newGrid();
