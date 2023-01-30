const cells = document.querySelectorAll(".container div");
const displayCurrentPlayer = document.querySelector(".players-turn");
const winningCombinations = [
  [0, 1, 2],
  [(3, 4, 5)],
  [(6, 7, 8)],
  [(0, 3, 6)],
  [(1, 4, 5)],
  [(2, 5, 8)],
  [(0, 4, 8)],
  [(2, 4, 6)],
];

let currentPlayer = 1;

//Player choses square to move
for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = () => {
    if (!cells[i].classList.contains("taken")) {
      const playerChip = document.createElement("div");
      if (currentPlayer === 1) {
        cells[i].classList.add("taken");
        cells[i].classList.add("player-one");
        cells[i].innerHTML = "X";
        currentPlayer = 2;
        displayCurrentPlayer.innerHTML = currentPlayer;
      } else if (currentPlayer === 2) {
        cells[i].classList.add("taken");
        cells[i].classList.add("player-two");
        cells[i].innerHTML = "O";
        currentPlayer = 1;
        displayCurrentPlayer.innerHTML = currentPlayer;
      }
    } else alert("Cant move there");
  };
}

//check for game ends
function gameEnds() {
  //check for win
  for (let y = 0; y < winningCombinations.length; y++) {
    const cell1 = cells[winningCombinations[y][0]];
    const cell2 = cells[winningCombinations[y][1]];
    const cell3 = cells[winningCombinations[y][2]];
  }
  if (
    cell1.classList.contains("player-one") &&
    cell2.classList.contains("player-one") &&
    cell3.classList.contains("player-one")
  ) {
    alert("Player One Wins!");
  }
  if (
    cell1.classList.contains("player-two") &&
    cell2.classList.contains("player-two") &&
    cell3.classList.contains("player-two")
  ) {
    alert("Player Two Wins!");
  }
}

gameEnds();
