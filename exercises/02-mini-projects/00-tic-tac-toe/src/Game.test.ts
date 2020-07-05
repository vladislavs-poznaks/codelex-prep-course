import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  // should place mark
  // should swap turns
  // should check for win
  test("should check for Xs wins | Row 1", () => {
    const game = new Game();
    game.board = ["X", "X", "X", "-", "-", "-", "-", "-", "-"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Row 2", () => {
    const game = new Game();
    game.board = ["-", "-", "-", "X", "X", "X", "-", "-", "-"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Row 3", () => {
    const game = new Game();
    game.board = ["-", "-", "-", "-", "-", "-", "X", "X", "X"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Column 1", () => {
    const game = new Game();
    game.board = ["X", "-", "-", "X", "-", "-", "X", "-", "-"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Column 2", () => {
    const game = new Game();
    game.board = ["-", "X", "-", "-", "X", "-", "-", "X", "-"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Column 3", () => {
    const game = new Game();
    game.board = ["-", "-", "X", "-", "-", "X", "-", "-", "X"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Diagonal Left to Right", () => {
    const game = new Game();
    game.board = ["X", "-", "-", "-", "X", "-", "-", "-", "X"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  test("should check for Xs wins | Diagonal Right to Left", () => {
    const game = new Game();
    game.board = ["-", "-", "X", "-", "X", "-", "X", "-", "-"];

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  // should check for draw
  test("should check for a Tie and No Winner", () => {
    const game = new Game();
    game.board = [
      "O", "X", "O", 
      "X", "X", "O", 
      "X", "O", "X"];

    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });

});
