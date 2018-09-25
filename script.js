let board = [[], [], [], [], [], [], []];

let divsToClick = document.querySelectorAll(".columns");
var click = 0;

function placeChip(event) {
  let target = event.currentTarget;
  let div = document.createElement("div");
  console.log(target.dataset.colIndex);

  if (target.children.length < 6) {
    click++;

    if (click % 2 == 0) {
      div.classList.add("black");
      board[target.dataset.colIndex].push("Black");
    } else {
      div.classList.add("red");
      board[target.dataset.colIndex].push("Red");
    }

    target.appendChild(div);
    setTimeout(() => board.forEach(winningCol), 0);
    console.log(click);
  }
}

for (let i = 0; i < divsToClick.length; i++) {
  let col = divsToClick[i];
  col.addEventListener("click", placeChip);
}

function winningCol(winningPiecesColumn) {
  let lastSeenPiece = "";
  let count = 0;

  winningPiecesColumn.forEach(piece => {
    if (lastSeenPiece === piece) {
      count++;
      if (count === 4) {
        alert("You Win " + piece);
      }
    } else {
      count = 1;
      lastSeenPiece = piece;
    }
  });
}
/* get x coord with datasets, y coord with the length of the index of the array */
