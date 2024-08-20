const numbers = []

export function getRandomNumberOne() {
  if (numbers.length >= 10) {
    throw new Error("All numbers have already been generated.")
  }

  let newNumber
  do {
    newNumber = Math.floor(Math.random() * 10)
  } while (numbers.includes(newNumber))

  numbers.push(newNumber)
  return newNumber
}
