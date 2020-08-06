import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {

  private snakeDirection: Direction = "Right";
  private snakeHead: Cell = new Cell(2, 0);
  private snakeTail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  private growCount = 0;

  private lastHeadLogX: number = 2;
  private lastHeadLogY: number = 0;

  setDirection(direction: Direction) {
    // console.log(`Direction change called.`);
    // console.log(`Snake head coor: ${this.snakeHead.x}, ${this.snakeHead.y}`);

    if (this.snakeDirection === "Right" && direction === "Left") return
    if (this.snakeDirection === "Left" && direction === "Right") return
    if (this.snakeDirection === "Up" && direction === "Down") return
    if (this.snakeDirection === "Down" && direction === "Up") return
    
    if (this.lastHeadLogX !== this.getHead().x || this.lastHeadLogY !== this.getHead().y) {
      this.snakeDirection = direction;
      this.lastHeadLogX = this.getHead().x;
      this.lastHeadLogY = this.getHead().y;
    }

  }

  move() {
    
    if (this.growCount === 0) {
      this.snakeTail.shift();
    } else {
      this.growCount--;
    }
    this.snakeTail.push(this.snakeHead);
    
    if (this.snakeDirection === "Right") {
      this.snakeHead = new Cell (this.snakeHead.x + 1, this.snakeHead.y)
    } else if (this.snakeDirection === "Down") {
      this.snakeHead = new Cell (this.snakeHead.x, this.snakeHead.y + 1)
    } else if (this.snakeDirection === "Up") {
      this.snakeHead = new Cell (this.snakeHead.x, this.snakeHead.y - 1)
    } else if (this.snakeDirection === "Left") {
      this.snakeHead = new Cell (this.snakeHead.x - 1, this.snakeHead.y)
    }

  }

  grow() {
    // Needs to deal with 2 apples in a row
    this.growCount += 3;
  }

  getHead(): Cell {
    return this.snakeHead;
  }

  isSnake(cell: Cell): boolean {
    return (this.snakeTail.some(tail => tail.x === cell.x && tail.y === cell.y))
  }

  getDirection(): Direction {
    return this.snakeDirection;
  }

  getTail(): Cell[] {
    return this.snakeTail;
  }
}
