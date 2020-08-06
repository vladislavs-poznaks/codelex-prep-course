import { Minesweeper } from "./Minesweeper";
import { LEVELS } from "./levels";

describe("Minesweeper", () => {
  const level = LEVELS[0];

  it("should have field with closed cells", () => {
    const minesweeper = new Minesweeper(level);

    const cells = minesweeper.getCells();

    expect(cells.length).toBe(10);
    cells.forEach(row => expect(row.length).toBe(10));
  });

  it("should be able to select level", () => {
    const minesweeper = new Minesweeper(level);

    expect(minesweeper.currentLevel().title).toBe("Beginner");

    minesweeper.selectLevel(LEVELS[1]);
    expect(minesweeper.currentLevel().title).toBe("Intermediate");

    minesweeper.selectLevel(LEVELS[2]);
    expect(minesweeper.currentLevel().title).toBe("Expert");
    
  });

  it("should refresh the field when different level is selected", () => {
    const minesweeper = new Minesweeper(level);
    let cells = minesweeper.getCells();

    minesweeper.selectLevel(LEVELS[1]);
    expect(minesweeper.currentLevel().title).toBe("Intermediate");
    
    cells = minesweeper.getCells();
    expect(cells.length).toBe(25);
    cells.forEach(row => expect(row.length).toBe(25));

    minesweeper.selectLevel(LEVELS[2]);
    expect(minesweeper.currentLevel().title).toBe("Expert");
    
    cells = minesweeper.getCells();
    expect(cells.length).toBe(100);
    cells.forEach(row => expect(row.length).toBe(100));

  });

  it("should open cell when clicked", () => {
    const minesweeper = new Minesweeper(level);

    minesweeper.onLeftMouseDown(0, 0)
    expect(minesweeper.getCells()[0][0].isOpen).toBe(true);
    
  });

  it("should generate mines only once", () => {
    const minesweeper = new Minesweeper(level);
    
    const cells = minesweeper.getCells();

    let bombCheck = false;
    let bombCount = 0;
    
    cells.forEach(row => row. forEach(cell => {
      if (cell.isBomb) {
        bombCheck = true; 
        bombCount++;
      }
    }));

    expect(bombCheck).toBe(true);
    expect(bombCount).toBe(10);
    
  });

  // Lost if ANY cell is Open AND is A Bomb
  it("should check if game is lost", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    cells[0][0].isBomb = true;
    minesweeper.onLeftMouseDown(0, 0)
    expect(minesweeper.isLost()).toBe(true);
    
  });

  it("should not allow to open more empty cells when game is lost", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    cells[0][0].isBomb = true;
    cells[1][0].isBomb = false;
    minesweeper.onLeftMouseDown(0, 0)
    expect(minesweeper.isLost()).toBe(true);

    minesweeper.onLeftMouseDown(1, 0)
    expect(cells[1][0].isOpen).toBe(false);

  });

  it("should open all cells with bombs when game is lost", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    cells[0][0].isBomb = true;
    cells[2][0].isBomb = true;
    minesweeper.onLeftMouseDown(0, 0)
    expect(minesweeper.isLost()).toBe(true);
    expect(cells[2][0].isOpen).toBe(true);

  });

  it("should generate mine count in cells", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    cells[0][0].isBomb = false;
    cells[1][0].isBomb = true;
    cells[1][1].isBomb = true;
    cells[0][1].isBomb = true;

    minesweeper.generateMineCount();
    expect(cells[0][0].mines).toBe(3);

    cells[1][0].isBomb = false;
    minesweeper.generateMineCount();
    expect(cells[0][0].mines).toBe(2);

    cells[0][1].isBomb = false;
    minesweeper.generateMineCount();
    expect(cells[0][0].mines).toBe(1);

  });

  it("should open neighbor cells when 0 mine cell is clicked", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    cells[0][0].isBomb = false;
    cells[1][0].isBomb = false;
    cells[1][1].isBomb = false;
    cells[0][1].isBomb = false;

    minesweeper.generateMineCount();
    minesweeper.onLeftMouseDown(0, 0);

    expect(cells[0][0].mines).toBe(0);

    expect(cells[1][0].isOpen).toBe(true);
    expect(cells[0][1].isOpen).toBe(true);
    expect(cells[1][1].isOpen).toBe(true);

  });

  it("should be able to flag a cell and recalculate bombs", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    minesweeper.onRightMouseUp(0, 0);
    expect(cells[0][0].isFlag).toBe(true);
    expect(minesweeper.minesLeftCount()).toBe(9);

    minesweeper.onRightMouseUp(0, 0);
    expect(cells[0][0].isFlag).toBe(false);
    expect(minesweeper.minesLeftCount()).toBe(10);

  });

  // Won if ALL bomb cells are flagged
  it("should be able to determine a win", () => {
    const minesweeper = new Minesweeper(level);
    const cells = minesweeper.getCells();

    cells.map(row => row.map(cell => {
      if (cell.isBomb) cell.isFlag = true
    }))

    expect(minesweeper.isWon()).toBe(true);

  });

  // After the first opened cell time starts ticking


});
