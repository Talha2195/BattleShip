import { status, state } from "./start"
import { placeRandomShip } from "../gameFunctions/placeRandomShip"
export function randomButton() {
  if (state === false) {
    status()
    console.log("Hello")
  } else {
    console.log("Game has already started!")
  }
}
