import {Squares, SquareType} from "./Square";

export class GameEntity {
    squares: Squares
    turn: SquareType

    constructor() {
        this.squares = Squares.init()
        this.turn = 'X'
    }

    calculateWinner = (): SquareType | null => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const values = this.squares.value
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (values[a] && values[a] === values[b] && values[a] === values[c]) {
                return values[a];
            }
        }
        return null;
    }

    canSet = (i: number): boolean => {
        return (this.calculateWinner() === null && this.squares.value[i] === null)
    }

    setSquare = (i: number): void => {
        this.squares.value[i] = this.turn
        this.changeTurn()
    }

    private changeTurn = (): void => {
        if (this.turn === 'X') this.turn = 'O'
        else this.turn = 'X'

    }
}