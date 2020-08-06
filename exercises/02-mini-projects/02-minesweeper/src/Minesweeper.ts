import { Level } from "./levels";

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
}

export class Minesweeper {
  private level: Level;
  private questionMarkOn: boolean;
  private startCounter: boolean;
  // private time: number;
  private cells: Cell[][] = [];

  constructor(level: Level) {
    this.level = level;
    this.questionMarkOn = false;
    this.startCounter = false;
    // this.time = 0;
    this.reset();

  }

  columnsCount(): number {
    return this.level.columns;
  }

  getCells(): Cell[][] {
    return this.cells; 
  }

  onLeftMouseDown(x: number, y: number) {

    // Checks question mark
    if (this.isQuestionMarksEnabled()) {
      if (!this.cells[x][y].isUnsure) {
        this.cells[x][y].isUnsure = true
      } else {
        this.cells[x][y].isUnsure = false
      }
      return
    }
    
    // Checks for loss
    if (!this.isLost() && !this.cells[x][y].isFlag) {
      
      this.cells[x][y].isOpen = true;

      if (this.cells[x][y].mines === 0) {
        this.floodFill();
      }
      
      // Opens the rest of the cells with bombs when game is lost
      if (this.isLost()) {
        this.cells.map(row => row.map(cell => {
          if (cell.isBomb) cell.isOpen = true
        }));
      }

    }

    //Checks for First Click
    let openCellCount = 0;
    for (let x = 0; x < this.level.columns; x++) {
      for (let y = 0; y < this.level.rows; y++) {
        if (this.cells[x][y].isOpen === true) openCellCount++
      }
    }
    // Starts counter
    if (openCellCount === 1) {this.startCounter = true} 

  }

  floodFill() {
    for (let x = 0; x < this.level.columns; x++) {
      for (let y = 0; y < this.level.rows; y++) {
        
        if (this.cells[x][y].isOpen && this.cells[x][y].mines === 0) {
          
          for (let xoff = -1; xoff <= 1; xoff++) {
            for (let yoff = -1; yoff <= 1; yoff++) {
              
              let xCheck = x + xoff;
              let yCheck = y + yoff;

              if (xCheck > -1 && xCheck < this.level.columns && yCheck > -1 && yCheck < this.level.rows) {
                if (!this.cells[xCheck][yCheck].isBomb && !this.cells[xCheck][yCheck].isOpen) {
                  this.onLeftMouseDown(xCheck, yCheck);
                }
              }

            }
          }

          
        }
        
      }
    }

  }

  onLeftMouseUp(x: number, y: number) {
    console.log(`LeftMouseUp! Cell with x: ${x} and y: ${y} pressed!`)
  }

  onRightMouseUp(x: number, y: number) {
    if (!this.isWon()) {
      if (!this.cells[x][y].isFlag && this.minesLeftCount() > 0) {
        this.cells[x][y].isFlag = true;
      } else {
        this.cells[x][y].isFlag = false;
      }
    } else {
      this.cells.map(row => row.map(cell => {
        if (!cell.isOpen && !cell.isBomb) cell.isOpen = true
      }));
    }

  }

  isTense(): boolean {
    return true;
  }

  isCounterOn() {
    return this.startCounter;
  }

  timePassed(): number {
    return 777;
  }

  minesLeftCount() {
    let minesFlagged: number = 0;
    
    for (let x = 0; x < this.level.columns; x++) {
      for (let y = 0; y < this.level.rows; y++) {
        if (this.cells[x][y].isFlag) {minesFlagged++;}
      }
    }

    return this.level.mines - minesFlagged;
  }

  reset() {

    // Generates new cells
    this.generateCells();

    // Should generate mines
    this.generateMines();

    // Should generate numbers
    this.generateMineCount();

    // Should reset counter
    this.startCounter = false;

  }

  generateCells() {
    this.cells = []
    for (let row = 0; row < this.level.rows; row++) {
      
      let rowOfCells: Cell[] = [];
      for (let col = 0; col < this.level.columns; col++) {
        rowOfCells.push(new Cell);
      }

      this.cells.push(rowOfCells);
    }
  }

  generateMines() {
    
    let bombOptions = [];

    for (let x = 0; x < this.level.columns; x++) {
      for (let y = 0; y < this.level.rows; y++) {
        bombOptions.push([x, y]);
      }
    }

    for (let mines = this.level.mines; mines > 0; mines--) {
      let choice = Math.floor(Math.random() * bombOptions.length);
      this.cells[bombOptions[choice][0]][bombOptions[choice][1]].isBomb = true;
      bombOptions.splice(choice, 1)
    }

    // let x: number;
    // let y: number;

    // for (let mine = 0; mine < this.level.mines; mine++) {
      
    //   do {
    //     x = Math.floor(Math.random() * this.level.columns);
    //     y = Math.floor(Math.random() * this.level.rows);
    //   } while (this.cells[x][y].isBomb === true) // Should not generate one mine twice

    //   this.cells[x][y].isBomb = true;
    // }

  }

  generateMineCount() {

    for (let x = 0; x < this.level.columns; x++) {
      for (let y = 0; y < this.level.rows; y++) {
        
        if (!this.cells[x][y].isBomb) {
          let cellMineCount: number = 0;
          
          for (let xoff = -1; xoff <= 1; xoff++) {
            for (let yoff = -1; yoff <= 1; yoff++) {
              
              let xCheck = x + xoff;
              let yCheck = y + yoff;

              if (xCheck > -1 && xCheck < this.level.columns && yCheck > -1 && yCheck < this.level.rows) {
                if (this.cells[xCheck][yCheck].isBomb) {cellMineCount++;}

              }

            }
          }

          this.cells[x][y].mines = cellMineCount;
        }
        
      }
    }
  }

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {
    this.level = level;
    this.reset();
  }

  isLost(): boolean {
    return this.cells.some(row => row.some(cell => cell.isOpen && cell.isBomb));
  }

  isWon(): boolean {
    let minesFlagged: number = 0;
    for (let x = 0; x < this.level.columns; x++) {
      for (let y = 0; y < this.level.rows; y++) {
        if (this.cells[x][y].isBomb && this.cells[x][y].isFlag) {
          minesFlagged++;
        };
      }
    }
    return this.level.mines === minesFlagged
  }

  isQuestionMarksEnabled(): boolean {
    return this.questionMarkOn;
  }

  toggleQuestionMarksEnabled() {
    if (this.questionMarkOn) {
      this.questionMarkOn = false
    } else {
      this.questionMarkOn = true
    }
  }
}
