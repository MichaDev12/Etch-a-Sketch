const container = document.querySelector('.container');

let limit = 16;
newGrid();

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
      square.style.backgroundColor = 'black';
    });
  });
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
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
