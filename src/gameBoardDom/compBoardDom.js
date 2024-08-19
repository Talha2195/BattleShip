import { computer } from "../gameClasses/player"
export function loadCompCellsDom() {
  const cellDiv = document.getElementById("compBox")

  // Clear the previous content (if any)
  cellDiv.innerHTML = ""

  // Traverse the board and create cells
  computer.board.grid.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div")
    rowDiv.className = "board-row" // Optional: Add a class for styling

    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement("div")
      cellDiv.className = "board-cell" // Optional: Add a class for styling
      cellDiv.dataset.row = rowIndex
      cellDiv.dataset.col = colIndex

      // Optionally, set initial content or styles based on cell value
      // e.g., cellDiv.textContent = cell;

      rowDiv.appendChild(cellDiv)
    })

    cellDiv.appendChild(rowDiv)
  })

  // Set up event listeners for the cells (if needed)
  setupCompCellListeners()
}

function setupCompCellListeners() {
  const cellDivs = document.querySelectorAll("#compBox .board-cell")

  cellDivs.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      const row = event.target.dataset.row
      const col = event.target.dataset.col

      // Handle cell click (e.g., interact with computer's board)
      console.log(`Computer cell clicked: Row ${row}, Col ${col}`)

      // Optionally, add toggle or other actions for computer's cells
      // For example, you might want to make cells toggleable or show a hit/miss state
      toggleCompCell(event.target)
    })
  })
}

function toggleCompCell(cell) {
  if (cell.classList.contains("cell-active")) {
    cell.classList.remove("cell-active")
  } else {
    cell.classList.add("cell-active")
  }
}
