/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    this.scores = this.scores.sort(function(a, b){return b-a});
    return this.scores[0];
  }

  get personalTopThree() {
    this.scores = this.scores.sort(function(a, b){return b-a});
    
    if (this.scores.length < 3) {
      return this.scores;
    } 
    
    return [this.scores[0], this.scores[1], this.scores[2]];
  }
}

export { HighScores };
