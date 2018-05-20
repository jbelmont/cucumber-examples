const { setWorldConstructor } = require('cucumber')

class Addition {
  constructor() {
    this.summation = 0
  }

  setTo(numbers) {
    this.numbers = numbers
  }

  addBy() {
    this.summation = this.numbers.reduce((prev, curr) => prev + curr, 0);
  }
}

setWorldConstructor(Addition)