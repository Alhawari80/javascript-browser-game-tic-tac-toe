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
function updateBoard() {
  board.forEach((sqr, i) => {
    squareEls[i].innerText = sqr;
  });
}
// update message


// step 5 Check for a winner


// step 6
// Place a piece on the board




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