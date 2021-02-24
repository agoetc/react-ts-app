export type SquareType = 'X' | 'O' | null

export class Squares {
    value: Array<SquareType>

    private constructor(squares: Array<SquareType>) {
        this.value = squares
    }

    static init = (): Squares => {
        return new Squares(Array(9).fill(null))
    }
}