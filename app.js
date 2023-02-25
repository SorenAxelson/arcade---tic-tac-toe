let gameEnd = false;
// reloads the page if reset button is clicked
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  location.reload(true);
});

let player1Input = document.getElementById("player1Input");
let player2Input = document.getElementById("player2Input");
let player1Name = "";
let player2Name = "";
// changes player names after Enter is hit
player1Input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    player1Name = player1Input.value;
    player1Input.value = "";
  }
});
player2Input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    player2Name = player2Input.value;
    player2Input.value = "";
  }
});

let player1WinMessage = document.getElementById("player1WinMessage");
let player2WinMessage = document.getElementById("player2WinMessage");
let tieMessage = document.getElementById("tieMessage");

let boxes = document.getElementsByClassName("box");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let turnCount = 0;
let player1 = "x";
let player2 = "o";
let currentPlayer = player1;
let board = [null, null, null, null, null, null, null, null, null];

const updatePositions = (element) => {
  for (let i = 0; i < board.length; i++) {
    if (`box${i + 1}` === element.id) {
      if (currentPlayer === player1) {
        board[i] = "x";
        element.innerText = "X";
      }
      if (currentPlayer === player2) {
        board[i] = "o";
        element.innerText = "O";
      }
    }
  }
};

const winConditionDetermination = () => {
  let victory = false;

  if (
    (board[0] === "x" && board[1] === "x" && board[2] === "x") ||
    (board[3] === "x" && board[4] === "x" && board[5] === "x") ||
    (board[6] === "x" && board[7] === "x" && board[8] === "x") ||
    (board[0] === "x" && board[3] === "x" && board[6] === "x") ||
    (board[1] === "x" && board[4] === "x" && board[7] === "x") ||
    (board[2] === "x" && board[5] === "x" && board[8] === "x") ||
    (board[0] === "x" && board[4] === "x" && board[8] === "x") ||
    (board[2] === "x" && board[4] === "x" && board[6] === "x")
  ) {
    victory = true;
    gameEnd = true;
  }
  if (
    (board[0] === "o" && board[1] === "o" && board[2] === "o") ||
    (board[3] === "o" && board[4] === "o" && board[5] === "o") ||
    (board[6] === "o" && board[7] === "o" && board[8] === "o") ||
    (board[0] === "o" && board[3] === "o" && board[6] === "o") ||
    (board[1] === "o" && board[4] === "o" && board[7] === "o") ||
    (board[2] === "o" && board[5] === "o" && board[8] === "o") ||
    (board[0] === "o" && board[4] === "o" && board[8] === "o") ||
    (board[2] === "o" && board[4] === "o" && board[6] === "o")
  ) {
    victory = true;
    gameEnd = true;
  }
  return victory;
};

const oneTurn = (element) => {
  if (element.innerText === "" && gameEnd === false) {
    updatePositions(element);
    if (winConditionDetermination() === true) {
      if (currentPlayer === player1) {
        player1WinMessage.style.display = "block";
        player1WinMessage.innerText = `${player1Name} won`;
      }
      if (currentPlayer === player2) {
        player2WinMessage.style.display = "block";
        player2WinMessage.innerText = `${player2Name} won`;
      }
    } else {
      //swaps players after each turn
      if (currentPlayer === player1) {
        currentPlayer = player2;
      } else if (currentPlayer === player2) {
        currentPlayer = player1;
      }
      // increaces turn count and ends game if board is full
      turnCount++;
      if (turnCount === 9) {
        tieMessage.style.display = "block";
      }
    }
  }
};

box1.addEventListener("click", () => oneTurn(box1));
box2.addEventListener("click", () => oneTurn(box2));
box3.addEventListener("click", () => oneTurn(box3));
box4.addEventListener("click", () => oneTurn(box4));
box5.addEventListener("click", () => oneTurn(box5));
box6.addEventListener("click", () => oneTurn(box6));
box7.addEventListener("click", () => oneTurn(box7));
box8.addEventListener("click", () => oneTurn(box8));
box9.addEventListener("click", () => oneTurn(box9));
