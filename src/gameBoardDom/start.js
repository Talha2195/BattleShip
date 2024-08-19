import { loadCellsDom } from "./playerBoardDom"
import { loadCompCellsDom } from "./compBoardDom"
export function started() {
  loadCellsDom()
  loadCompCellsDom()
}
