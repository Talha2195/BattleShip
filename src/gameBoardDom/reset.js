import { player, computer } from "../gameClasses/player"

export function resetButton() {
  const random = document.getElementById("random")
  const start = document.getElementById("start")
  const playerScreen = document.getElementById("playerBox")
  const compScreen = document.getElementById("compBox")

  playerScreen.innerHTML = ""
  compScreen.innerHTML = ""

  start.disabled = true
  random.disabled = false

  player.board.clearBoard()
  computer.board.clearBoard()

  player.resetShips()
  computer.resetShips()
}
