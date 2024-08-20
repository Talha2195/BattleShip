import { Board } from "./gameBoard"
export class Player {
  constructor(box) {
    this.turn = false
    this.box = box
    this.board = new Board(10, this.highlight.bind(this))
  }
  loadCellsDom() {
    const cellsDiv = document.getElementById(this.box)

    cellsDiv.innerHTML = ""

    this.board.grid.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div")
      rowDiv.className = "board-row"

      row.forEach((cell, colIndex) => {
        const cellDiv = document.createElement("div")
        cellDiv.className = "board-cell"
        cellDiv.dataset.row = rowIndex
        cellDiv.dataset.col = colIndex
        rowDiv.appendChild(cellDiv)
      })

      cellsDiv.appendChild(rowDiv)
    })

    this.setupCellListeners()
  }

  setupCellListeners() {
    const cellDivs = document.querySelectorAll(`#${this.box} .board-cell`)

    cellDivs.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        const row = event.target.dataset.row
        const col = event.target.dataset.col
        this.board.receiveAttack(row, col)
        this.board.printBoard()
        this.toggleCell(event.target)
        console.log(`Cell clicked: Row ${row}, Col ${col}`)
      })
    })
  }

  toggleCell(cell) {
    if (cell.classList.contains("cell-active")) {
      cell.classList.remove("cell-active")
    } else {
      cell.classList.add("cell-active")
    }
  }
  highlight(row, col) {
    console.log(`Highlighting cell at Row ${row}, Col ${col}`) // Debug log
    const cell = document.querySelector(
      `#${this.box} .board-cell[data-row="${row}"][data-col="${col}"]`
    )
    if (cell) {
      cell.classList.add("highLighted")
    } else {
      console.log(`Cell not found at Row ${row}, Col ${col}`) // Debug log
    }
  }
}
export const player = new Player("playerBox")
export const computer = new Player("compBox")
