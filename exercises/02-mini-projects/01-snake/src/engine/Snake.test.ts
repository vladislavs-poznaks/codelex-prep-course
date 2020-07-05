import { Snake } from './Snake'
import { Cell } from './Cell'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })


    it("snake should move Right", () => {
        const snake = new Snake()

        snake.move();

        expect(snake.getDirection()).toBe("Right")
        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("snake should move Down", () => {
        const snake = new Snake()

        snake.setDirection("Down");
        snake.move();

        expect(snake.getDirection()).toBe("Down")
        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("snake should move Up", () => {
        const snake = new Snake()

        snake.setDirection("Up");
        snake.move();

        expect(snake.getDirection()).toBe("Up")
        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("snake should move Left", () => {
        const snake = new Snake()

        snake.setDirection("Down");
        snake.move();
        snake.setDirection("Left");
        snake.move();

        expect(snake.getDirection()).toBe("Left")
        expect(snake.getHead()).toEqual(new Cell(1, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)])
    })

    it("snake should not be able to go opposite direction", () => {
        const snake = new Snake()

        snake.setDirection("Left");
        expect(snake.getDirection()).toBe("Right")

        snake.setDirection("Down");
        snake.setDirection("Up");
        expect(snake.getDirection()).toBe("Down")

        snake.setDirection("Left");
        snake.setDirection("Right");
        expect(snake.getDirection()).toBe("Left")

        snake.setDirection("Up");
        snake.setDirection("Down");
        expect(snake.getDirection()).toBe("Up")
        
    })

    it("snake should be able to grow", () => {
        const snake = new Snake()

        snake.grow();
        snake.move();
        snake.move();
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(5, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0), new Cell(2, 0), new Cell(3, 0), new Cell(4, 0)])
    })

    it("should be able to recognize snake's tail", () => {
        const snake = new Snake()

        // Snake's tail
        expect(snake.isSnake(new Cell(0,0))).toBe(true)
        expect(snake.isSnake(new Cell(1,0))).toBe(true)
    })

    it("should be able to grow correctly with two apples in a row", () => {
        const snake = new Snake()

        snake.grow();
        snake.grow();

        for (let i = 0; i < 6; i++) snake.move();
        
        // Snake's length should be 9
        expect(snake.getTail().length + 1).toBe(9)
        
    })
    
    
})