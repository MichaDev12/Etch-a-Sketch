const container = document.querySelector('.container');

let limit = 16;
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
