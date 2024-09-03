const container = document.querySelector('.container');

let limit = 16;
newGrid();

let normalOption = true;
let rainbowOption = false;
let darkeningOption = false;

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
        let r = getRandomInt(255);
        let g = getRandomInt(255);
        let b = getRandomInt(255);
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

const size = document.querySelector('button');
const normalDraw = document.querySelector('#normal');
const rainbowDraw = document.querySelector('#rainbow');
const darkeningDraw = document.querySelector('#darkening');

size.addEventListener('click', () => {
  let changeSize = prompt('Type a number (1-100).');
  while (changeSize < 1 || changeSize > 100) {
    changeSize = prompt('Error. Type a number again (1-100).');
  }
  limit = changeSize;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  newGrid();
});

normalDraw.addEventListener('click', () => {
  normalOption = true;
  rainbowOption = false;
  darkeningOption = false;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  newGrid();
});

rainbowDraw.addEventListener('click', () => {
  normalOption = false;
  rainbowOption = true;
  darkeningOption = false;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  newGrid();
});

darkeningDraw.addEventListener('click', () => {
  normalOption = false;
  rainbowOption = false;
  darkeningOption = true;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  newGrid();

});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
