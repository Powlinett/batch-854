// RAPPEL

// 1. SELECT HINT BUTTON
// 2. ADD EVENT LISTENER 'click'
// 3. ON CLICK, SHOW HINT

const hintButton = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');

hintButton.addEventListener('click', (event) => {
  // console.log('hintButton', event.currentTarget);
  hint.classList.add('active');
});


// GLOBAL

// 1. SELECT ALL TILES

const tiles = document.querySelectorAll('table tr td');
// console.log('tiles', tiles);

// 2. ON EACH, ADD EVENT LISTENER 'click'

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    // console.log('tile', event.currentTarget);
    // console.log('tile === currentTarget', tile === event.currentTarget);

    // 3. ON CLICK, CHECK IF TILE HAS AN EMPTY NEIGHBOR
    // 4. IF YES, MOVE TILE
    // 5. IF NO, DO NOTHING
    if (canMove(tile)) move(tile);

    // 6. ON EACH MOVE, CHECK IF USER WINS
    const winner = checkIfPlayerWins();
    if (winner) {
      hint.innerText = 'Winner!';
      hint.classList.add('active');
    };
  });
});

const canMove = (tile) => {
    // 3. (1) GET CURRENT TILE POSITION
    const tileColumnIndex = tile.cellIndex;
    const tileRowIndex = tile.parentElement.rowIndex;

    // 3. (2) GET THE EMPTY TILE POSITION
    const emptyTile = document.querySelector('.empty');
    // console.log('emptyTile', emptyTile);

    const emptyTileColumnIndex = emptyTile.cellIndex;
    const emptyTileRowIndex = emptyTile.parentElement.rowIndex;

    // 3. (3) CHECK IF EMPTY NEIGHBORS
    // emptyUp -> if same column AND tileRowIndex + 1 === emptyTileRowIndex
    // emptyDown -> if same column AND tileRowIndex - 1 === emptyTileRowIndex
    // emptyRight -> if same row AND tileColumnIndex - 1 === emptyTileColumnIndex
    // emptyLeft -> if same row AND tileColumnIndex + 1 === emptyTileColumnIndex
    const emptyUp = emptyTileColumnIndex === tileColumnIndex && tileRowIndex + 1 === emptyTileRowIndex;
    const emptyDown = emptyTileColumnIndex === tileColumnIndex && tileRowIndex - 1 === emptyTileRowIndex;
    const emptyRight = emptyTileRowIndex === tileRowIndex && tileColumnIndex - 1 === emptyTileColumnIndex;
    const emptyLeft = emptyTileRowIndex === tileRowIndex && tileColumnIndex + 1 === emptyTileColumnIndex;

    return emptyUp || emptyDown || emptyRight || emptyLeft;
};

const move = (tile) => {
  // 4. (1) GET CURRENT TILE VALUE
  const value = tile.innerText;

  // 4. (2) GET EMPTY FILE
  const emptyTile = document.querySelector('.empty');

  // 4. (3) INVERT CURRENT TILE AND EMPTY TILE STYLE/TEXT
  emptyTile.classList.remove('empty');
  emptyTile.innerText = value;

  tile.classList.add('empty');
  tile.innerText = null;
};



const checkIfPlayerWins = () => {
  const numberInOrder = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ";

  const tilesValues = [];
  
  const tiles = document.querySelectorAll('table tr td');
  tiles.forEach((tile) => tilesValues.push(tile.innerText));

  const tilesValuesString = tilesValues.join(', ');

  return tilesValuesString === numberInOrder;
};




