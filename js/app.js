/*-------------------------------- Constants --------------------------------*/
const squares = document.querySelectorAll(".sqr");

/*-------------------------------- Variables --------------------------------*/
let play = 1;
let grid = ["", "", "", "", "", "", "", "", ""];
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
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    if (event.target.innerText === "X" || event.target.innerText === "O") {
      document.getElementById("message").innerHTML = "Can't play here!";
      return;
    }
    grid[event.target.innerText] = event.target.innerText;
    console.log(grid);
    if (play % 2 != 0) {
      document.getElementById("message").innerHTML = "Os turn";
      document.getElementById(`${event.target.innerText}`).style.color = "red";
      event.target.innerText = "X";
      play = play + 1;
      win = checkWin(grid);
      if (win === true) {
        document.getElementById("message").innerHTML = "X WINS!";
      }
    } else {
      document.getElementById("message").innerHTML = "Xs turn";
      document.getElementById(`${event.target.innerText}`).style.color = "blue";
      event.target.innerText = "O";
      play = play + 1;
      win = checkWin(grid);
      if (win === true) {
        document.getElementById("message").innerHTML = "O WINS!";
      }
    }
  });
});
/*----------------------------- Functions -----------------------------*/
function checkWin(playerGrid) {
  let win = false;
  for (let i = 0; i < winArray.length; i++) {
    const [x, y, z] = winArray[i];
    if (
      playerGrid[x] &&
      playerGrid[x] === playerGrid[y] &&
      playerGrid[x] === playerGrid[z]
    ) {
      win = true;
      break;
    }
  }

  if (win) {
    return (win = true);
  }

  if (playerGrid.includes("")) {
    return;
  }
}

/*CODE GRAVEYARD

/*
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

/*calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    document.getElementById("field").innerHTML = event.target.innerText;
    if (operatorClicked == true) {
      secondOperandArray[numClicks] = Number(event.target.innerText);
      numClicks += 1;
    } else {
      firstOperandArray[numClicks] = Number(event.target.innerText);
      numClicks += 1;
    }
  }

  if (event.target.classList.contains("operator")) {
    if (operatorClicked != true) {
      firstDigitInfo = joinDigits(firstOperandArray);
      console.log(firstDigitInfo);
      firstOperand = firstDigitInfo[3];
      (document.getElementById("field").innerHTML = firstOperand),
        " ",
        event.target.innerText;
    }
  }

  if (event.target.innerText === "/") {
    operator = "divide";
  } else if (event.target.innerText === "*") {
    operator = "multiply";
  } else if (event.target.innerText === "-") {
    operator = "subtract";
  } else if (event.target.innerText === "+") {
    operator = "add";
  } else if (event.target.innerText === "=") {
    secondDigitInfo = joinDigits(secondOperandArray);
    secondOperand = secondDigitInfo[3];
    (document.getElementById("field").innerHTML = firstOperand),
      " ",
      event.target.innerText;
    completeEquation(operator, firstOperand, secondOperand);
    document.getElementById("field").innerHTML = total;
  } else if (event.target.innerText === "C") {
    document.getElementById("field").innerHTML = 0;
    numClicks = 0;
    firstOperand = 0;
    secondOperand = 0;
    joinedDigits = 0;
    total = 0;
    operatorClicked = false;
    readyToEquate = false;
    firstOperandArray = [];
    secondOperandArray = [];
    firstDigitInfo = [];
    secondDigitInfo = [];
    digitArray = [];
  }
});



function checkWin() {
    if()
}


function joinDigits(array) {
  if (operatorClicked != true) {
    operatorClicked = true;
    numClicks = 0;
  }
  joinedDigits = Number(array.join(""));
  digitArray = [readyToEquate, operatorClicked, numClicks, joinedDigits];
  return digitArray;
}
function completeEquation(doThis, num1, num2) {
  if (doThis === "divide") {
    total = num1 / num2;
  } else if (doThis === "multiply") {
    total = num1 * num2;
  } else if (doThis === "subtract") {
    total = num1 - num2;
  } else if (doThis === "add") {
    total = num1 + num2;
  }
  return total;
}
*/
