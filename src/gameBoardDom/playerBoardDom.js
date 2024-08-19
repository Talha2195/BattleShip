import { player } from "../gameClasses/player"
import { Board } from "../gameClasses/gameBoard"
export function loadCellsDom() {
  const cellsDiv = document.getElementById("playerBox")

  cellsDiv.innerHTML = ""

  player.board.grid.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div")
    rowDiv.className = "board-row"

    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement("div")
      cellDiv.className = "board-cell"
      cellDiv.dataset.row = rowIndex
      cellDiv.dataset.col = colIndex
      player.board.printBoard
      rowDiv.appendChild(cellDiv)
    })

    cellsDiv.appendChild(rowDiv)
  })

  setupCellListeners()
}

function setupCellListeners() {
  const cellDivs = document.querySelectorAll("#playerBox .board-cell")

  cellDivs.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      const row = event.target.dataset.row
      const col = event.target.dataset.col
      player.board.receiveAttack(row, col)
      player.board.printBoard()
      toggleCell(event.target)
      console.log(`Cell clicked: Row ${row}, Col ${col}`)
    })
  })
}

function toggleCell(cell) {
  if (cell.classList.contains("cell-active")) {
    cell.classList.remove("cell-active")
  } else {
    cell.classList.add("cell-active")
  }
}
