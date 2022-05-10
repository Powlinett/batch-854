// select all tiles

const tiles = document.querySelectorAll('td');
const orderedTileNumber = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ";

// iterate over all tile

tiles.forEach((tile) => {
  //// add event listener on 'click'
  tile.addEventListener('click', (event) => {
    const emptyTile = document.querySelector('.empty');

    //// if empty neighbor, replace empty tile by current tile
    if (canMove(tile)) {
      emptyTile.classList.remove('empty');
      emptyTile.innerText = tile.innerText;

      tile.classList.add('empty');
      tile.innerText = null;

      const numbersAsString = [];

      const currentTiles = document.querySelectorAll('td');
      currentTiles.forEach((currentTile) => {
        const value = currentTile.innerText;
        numbersAsString.push(value);
      });

      const allNumbersAsString = numbersAsString.join(', ');
      const winner = allNumbersAsString === orderedTileNumber;
      if (winner) {
        console.log('winner');
      }
    }
  });
});

const canMove = (tile) => {
  const rowIndex = tile.parentElement.rowIndex;
  const columnIndex = tile.cellIndex;
  // j'ai la position de la tile sur laquelle j'ai cliqué

  const emptyTile = document.querySelector('.empty');
  const emptyTileRowIndex = emptyTile.parentElement.rowIndex;
  const emptyTileColumnIndex = emptyTile.cellIndex;
  // j'ai la position de le tile vide

  //// verify if empty neighbor
  // si même ligne / 1 écart de colum
  // si même column / 1 écart de ligne
  const emptyUp = columnIndex === emptyTileColumnIndex && rowIndex - 1 === emptyTileRowIndex;
  const emptyDown = columnIndex === emptyTileColumnIndex && rowIndex + 1 === emptyTileRowIndex;
  const emptyRight = rowIndex === emptyTileRowIndex && columnIndex + 1 === emptyTileColumnIndex;
  const emptyLeft = rowIndex === emptyTileRowIndex && columnIndex - 1 === emptyTileColumnIndex;

  return emptyUp || emptyDown || emptyRight || emptyLeft;
};


///////////////////////

const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
});


