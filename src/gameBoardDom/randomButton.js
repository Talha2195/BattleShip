import { Player, player, computer } from "../gameClasses/player"
import { cycleShipPlacement } from "../gameFunctions/cyclePlacement"
export function randomButton() {
  player.loadCellsDom("playerBox")
  computer.loadCellsDom("compBox")
  cycleShipPlacement()
  const start = document.getElementById("start")
  start.disabled = false
}
