/*-------------------------------- Constants --------------------------------*/
const squares = document.querySelectorAll(".sqr");

/*-------------------------------- Variables --------------------------------*/
let play = 1;
let playerGrid = ["", "", "", "", "", "", "", "", ""];
let win = false;
//I did have to Google how to find win conditions.
//I spent four hours trying a number of attempts using different
//types of grids.
//Please see the code graveyard at the bottom of the document
//to see my attempts
const winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*
  if (squaresClicked >= 6) {
    win = checkWin(player1Grid, player2Grid);
    if (win != "Player 1" && win != "Player 2") {
        console.log("No win yet")
    }
    else
        console.log(`${win} Wins!`);
*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    if (win === true) {
      startOver();
    } else if (
      event.target.innerText === "X" ||
      event.target.innerText === "O"
    ) {
      document.getElementById("message").innerHTML = "Can't play here!";
      return;
    } else if (play % 2 != 0) {
      playerGrid[event.target.innerText] = "X";

      document.getElementById("message").innerHTML = "Os turn";
      document.getElementById(`${event.target.innerText}`).style.color = "red";
      event.target.innerText = "X";
      play = play + 1;
      win = checkWin();
      if (win === true) {
        document.getElementById("message").innerHTML =
          "X WINS! Click a box to reset.";
      }
    } else {
      playerGrid[event.target.innerText] = "O";
      document.getElementById("message").innerHTML = "Xs turn";
      document.getElementById(`${event.target.innerText}`).style.color = "blue";
      event.target.innerText = "O";
      play = play + 1;
      win = checkWin();
      if (win === true) {
        document.getElementById("message").innerHTML =
          "O WINS! Click a box to reset.";
      }
    }
  });
});
/*----------------------------- Functions -----------------------------*/
function checkWin() {
  let win = false;
  for (let i = 0; i < winArray.length; i++) {
    const [x, y, z] = winArray[i];

    // console.log("[x,y,z] = ", [x, y, z]);

    if (
      playerGrid[x] &&
      playerGrid[x] === playerGrid[y] &&
      playerGrid[x] === playerGrid[z]
    ) {
      win = true;
      console.log("");
      console.log("WIN CONDITION SET");
      console.log("");
      return win;
    }
  }
  if (playerGrid.includes("")) {
    return;
  }
}

function startOver() {
  console.log("statover");
  playerGrid = ["", "", "", "", "", "", "", "", ""];
  play = 1;
  win = false;
  let elements = document.querySelectorAll(".sqr");
  document.getElementById("message").innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "gainsboro";
    elements[i].textContent = i;
  }
}
/*CODE GRAVEYARD



/*
  if (squaresClicked >= 6) {
    win = checkWin(player1Grid, player2Grid);
    if (win != "Player 1" && win != "Player 2") {
        console.log("No win yet")
    }
    else
        console.log(`${win} Wins!`);

let testGrid = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 0],
];

function checkWin(grid1) {
  let winTotalColumn = 0;
  let winTotalRow = 0;
  let y = 0;
  let attempts = 0;
  for (let i = 0; i < 9; i++) {
    console.log("i: ", i);

    for (let y = 0; y < 3; y++) {
      console.log("");
      console.log("wincolumn: ", winTotalColumn, "winrow: ", winTotalRow);
      winTotalColumn = 0;
      winTotalRow = 0;
      for (let x = 0; x < 3; x++) {
        console.log("x: ", x, "y: ", y);
        winTotalColumn += grid1[x][y];
        winTotalRow += grid1[y][x];

        if (winTotalColumn === 3 || winTotalRow === 3) {
          console.log("Player 1 wins");
          return "Player 1";
        } else {
          attempts += 1;
        }
      }
    }
  }
}
checkWin(testGrid);
*/
