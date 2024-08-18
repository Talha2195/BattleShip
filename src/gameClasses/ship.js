class Ship {
  static shipCount = 0
  constructor(length) {
    this.length = length
    this.hit = 0
    this.sunk = false
    Ship.shipCount++
    console.log("Current ship count:" + Ship.shipCount)
  }

  isHit() {
    this.hit++
    if (this.hit >= this.length) {
      this.sunk = true
      console.log("Has sunk!")
      Ship.decrementShipCount()
    }
  }

  isSunk() {
    return this.sunk
  }
  static getShipCount() {
    return Ship.shipCount
  }

  static decrementShipCount() {
    if (Ship.shipCount > 0) {
      Ship.shipCount--
      Ship.gameStatus()
    }
  }
  static gameStatus() {
    if (Ship.shipCount <= 0) {
      console.log("The game has ended!")
      console.log(Ship.shipCount)
    } else {
      console.log("Game hasn't ended!")
    }
  }
}

export const shipOne = new Ship(1)

export const shipTwo = new Ship(2)

// export const shipThree = new Ship(3)
