import {
  shipOne,
  shipTwo,
  shipThree,
  shipFour,
  shipFive,
} from "../gameClasses/ship"
export const playerShipPlacements = [
  [
    { ship: shipOne, orientation: "horizontal", startRow: 0, startCol: 0 },
    { ship: shipTwo, orientation: "vertical", startRow: 1, startCol: 5 },
    { ship: shipThree, orientation: "vertical", startRow: 4, startCol: 9 },
    { ship: shipFour, orientation: "horizontal", startRow: 9, startCol: 6 },
    { ship: shipFive, orientation: "horizontal", startRow: 6, startCol: 0 },
  ],
  [
    { ship: shipOne, orientation: "vertical", startRow: 8, startCol: 1 },
    { ship: shipTwo, orientation: "vertical", startRow: 4, startCol: 4 },
    { ship: shipThree, orientation: "horizontal", startRow: 2, startCol: 0 },
    { ship: shipFour, orientation: "vertical", startRow: 3, startCol: 8 },
    { ship: shipFive, orientation: "horizontal", startRow: 0, startCol: 4 },
  ],
  [
    { ship: shipOne, orientation: "horizontal", startRow: 7, startCol: 5 },
    { ship: shipTwo, orientation: "vertical", startRow: 0, startCol: 6 },
    { ship: shipThree, orientation: "horizontal", startRow: 4, startCol: 4 },
    { ship: shipFour, orientation: "horizontal", startRow: 9, startCol: 3 },
    { ship: shipFive, orientation: "vertical", startRow: 3, startCol: 8 },
  ],
  [
    { ship: shipOne, orientation: "vertical", startRow: 1, startCol: 1 },
    { ship: shipTwo, orientation: "horizontal", startRow: 4, startCol: 7 },
    { ship: shipThree, orientation: "vertical", startRow: 7, startCol: 1 },
    { ship: shipFour, orientation: "horizontal", startRow: 0, startCol: 5 },
    { ship: shipFive, orientation: "horizontal", startRow: 7, startCol: 5 },
  ],
]
export const compShipPlacements = [
  [
    { ship: shipOne, orientation: "horizontal", startRow: 0, startCol: 0 },
    { ship: shipTwo, orientation: "vertical", startRow: 1, startCol: 5 },
    { ship: shipThree, orientation: "vertical", startRow: 4, startCol: 9 },
    { ship: shipFour, orientation: "horizontal", startRow: 9, startCol: 6 },
    { ship: shipFive, orientation: "horizontal", startRow: 6, startCol: 0 },
  ],
  [
    { ship: shipOne, orientation: "vertical", startRow: 8, startCol: 1 },
    { ship: shipTwo, orientation: "vertical", startRow: 4, startCol: 4 },
    { ship: shipThree, orientation: "horizontal", startRow: 2, startCol: 0 },
    { ship: shipFour, orientation: "vertical", startRow: 3, startCol: 8 },
    { ship: shipFive, orientation: "horizontal", startRow: 0, startCol: 4 },
  ],
  [
    { ship: shipOne, orientation: "horizontal", startRow: 7, startCol: 5 },
    { ship: shipTwo, orientation: "vertical", startRow: 0, startCol: 6 },
    { ship: shipThree, orientation: "horizontal", startRow: 4, startCol: 4 },
    { ship: shipFour, orientation: "horizontal", startRow: 9, startCol: 3 },
    { ship: shipFive, orientation: "vertical", startRow: 3, startCol: 8 },
  ],
  [
    { ship: shipOne, orientation: "vertical", startRow: 1, startCol: 1 },
    { ship: shipTwo, orientation: "horizontal", startRow: 4, startCol: 7 },
    { ship: shipThree, orientation: "vertical", startRow: 7, startCol: 1 },
    { ship: shipFour, orientation: "horizontal", startRow: 0, startCol: 5 },
    { ship: shipFive, orientation: "horizontal", startRow: 7, startCol: 5 },
  ],
]
