import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);
    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });

  it("should determine if apple is inside", () => {
    const grid = new Grid(configuration);
    const apples = grid.getApples();

    expect(grid.isAppleInside(apples[0])).toBe(true);
    expect(apples.every(apple => grid.isAppleInside(apple))).toBe(true);
    expect(grid.isAppleInside(new Cell(9999, 9999))).toBe(false);
  });

  it("should remove an apple", () => {
    const grid = new Grid(configuration);
    
    let apples = grid.getApples();
    const xCoor = apples[2].x;
    const yCoor = apples[2].y;

    grid.removeApple(new Cell(xCoor, yCoor));
    expect(grid.getApples()[2].x !== xCoor || grid.getApples()[2].y !== yCoor).toBe(true);
    
  });

  // it("should not seed apples on snake", () => {
  //   const grid = new Grid(configuration);
    
  //   const snakeImitationArray: Cell[] = [new Cell(0,0), new Cell(1,0), new Cell(2,0)];
  //   const apples = grid.getApples();
    
  // });

});
