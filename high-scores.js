//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return this.input;
  }

  get latest() {
    return this.input[this.input.length - 1];
  }

  get personalBest() {
    return Math.max.apply(Math, this.input)
  }

  get personalTopThree() {
    let sorted = this.input.sort(function(a, b){return b-a})
    return sorted.slice(0,3)
  }
}
