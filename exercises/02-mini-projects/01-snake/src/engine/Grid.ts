import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  private cellsHor: number;
  private cellsVer: number;

  private apples: Cell[] = []/*[
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22),
    new Cell(41, 22)
  ];*/

  constructor(configuration: Configuration) {
    this.configuration = configuration;
    this.cellsHor = configuration.nbCellsX;
    this.cellsVer = configuration.nbCellsY;

    this.seed(new Cell(2, 0), [new Cell(0,0), new Cell(1,0)]);

  }
  
  seed(head: Cell, tail: Cell[]): void {
    for (let i = 1; i <= this.configuration.apples; i++) {
      let horCoor: number;
      let verCoor: number;

      do {
        horCoor = Math.floor(Math.random() * this.cellsHor);
        verCoor = Math.floor(Math.random() * this.cellsVer);
      } while ((head.x === horCoor && head.y === verCoor) 
      || tail.some(part => part.x === horCoor && part.y === verCoor 
      || this.apples.some(apple => apple.x === horCoor && apple.y === verCoor)))
      // Should check if not on snake or on existing apple
        
      this.apples.push(new Cell(horCoor, verCoor));
    }
  }

  isAppleInside(cell: Cell): boolean {
    return this.apples.some(apple => apple.x === cell.x && apple.y === cell.y);
  }

  removeApple(cell: Cell): void {
    
    this.apples = this.apples.filter(apple => apple.x !== cell.x || apple.y !== cell.y)
  }

  isDone(): boolean {
    return this.apples.length === 0
  }

  getApples(): Cell[] {
    return this.apples;
  }
}
