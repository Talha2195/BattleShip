class Ship {
  constructor(length) {
    this.length = length
    this.hit = 0
    this.sunk = false
  }

  isHit() {
    this.hit++
    if (this.hit >= this.length) {
      this.sunk = true
    }
  }

  isSunk() {
    return this.sunk
  }
}
export const shipOne = new Ship(1)
