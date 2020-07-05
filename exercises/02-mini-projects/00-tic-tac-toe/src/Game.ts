export type XO = "X" | "O" | "-";

export class Game {
  
  board: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  winningPositions = [
  // Winning Rows
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  // Winning Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Winning Diagonals
  [0, 4, 8],
  [2, 4, 6]
  ]

  circleTurn: boolean = false;
  
  getCells(): XO[] {
    return this.board;
  }

  getTurn(): XO {
    return this.circleTurn ? "O" : "X";
  }

  getWinner(): XO {
    
    let winningCombo: number[] = [];

    for (let i = 0; i < this.winningPositions.length; i++) {
      winningCombo = this.winningPositions[i];
      if (winningCombo.every(tilePosition => this.board[tilePosition] === "X")) {return "X"}
      if (winningCombo.every(tilePosition => this.board[tilePosition] === "O")) {return "O"}
    }
    
    return "-";
  }

  isTie(): boolean {
    return this.getWinner() === "-" && this.board.every(tile => tile !== "-")
  }

  onClick(i: number): void {
    // console.log(`cell ${i} clicked`);
    
    // Place mark if possible!
    if (this.board[i] === "-") {
      this.board[i] = this.getTurn();
      this.getCells();
      
      // Check for win!
      this.getWinner();

      // Check for draw!
      this.isTie();

      // Swap turns!
      this.circleTurn = !this.circleTurn;

    } else {
      console.log("Cell already used!");
    }

    
    
  }

  restart(): void {
    this.board= ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.circleTurn = false;
  }


}
