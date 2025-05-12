// //1) Define the required variables used to track the state of the game.

// //2) Store cached element references.

// //3) Upon loading, the game state should be initialized, and a function should 
// //   be called to render this game state.

// //4) The state of the game should be rendered to the user.

// //5) Define the required constants.

// //6) Handle a player clicking a square with a `handleClick` function.

// //7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetButtonEl = document.querySelector('#reset');

// Winning combinations
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => square.addEventListener('click', handleClick));
resetButtonEl.addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/

// Initialize the game
function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    render();
}
// step 4 Render the game state and update board
function render() {
    updateBoard();
    updateMessage();
}
// update board
function updateBoard() {board.forEach((sqr, i) => {
squareEls[i].innerText = sqr;});
}
// update message
function updateMessage() {
  if (!winner && !tie) {
    messageEl.innerText = `It's ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.innerText = "It's a tie!";
  } else {
    messageEl.innerText = `Congrats, ${turn} wins!`;
  }
}

// Handle square click
function handleClick(event) {
  const squareIndex = Array.from(squareEls).indexOf(event.target); //asked a friend
  if (board[squareIndex] !== "" || winner) return;
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}



// step 5 Check for a winner
function checkForWinner() {
  winner = winningCombos.some(pattern => pattern.every(i => board[i] === turn)
  );
//   if (winner) {
    // console.log('winner:' , '${turn}');
  }


// step 6
// Place a piece on the board
function placePiece(index) {
    board[index] = turn;
    // console.log('Board state:', board);
  }
//  Check for a tie
function checkForTie() {
  if (winner) return;
  tie = !board.includes("");
//   console.log('Tie:', tie);
}

function switchPlayerTurn() {
  if (winner) return;
  turn = turn === "X" ? "O" : "X";
//   console.log('Turn:', turn);
}

init();




/*-------------------------office hour discussion--------------------------*/


// event.target.id

// loop through square Elements, attach event listener to each one click, handleClick

// create handleClick function

// get the id event.target.id

// check if the board position at that id == 'X' or 'O' ,OR winner is true
// return
// loop through square Elements, attach event listener to each one click, handleClick

// create handleClick function

// get the id event.target.id

// check if the board position at that id == 'X' or 'O' ,OR winner is true

// return

// board[index] = turn

// board[0] !== ''&& board[0] = board[1]=board[2] ||
// sqrindx

// if( condition || condition){}



// if (board[squareIndex] !==='' || winner) return;