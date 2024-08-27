import { computer, player } from "../gameClasses/player"
export function started() {
  computer.setupCellListeners()
  player.turn = true
  const screen = document.getElementById("screenText")
  screen.innerHTML = "Let's start!"
  const start = document.getElementById("start")
  start.disabled = true
  const random = document.getElementById("random")
  random.disabled = true
  const reset = document.getElementById("reset")
  reset.disabled = false
  return
}
