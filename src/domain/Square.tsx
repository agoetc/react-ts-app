export type SquareType = 'X' | 'O' | null

export class Squares {
    value: Array<SquareType>

    private constructor(squares: Array<SquareType>) {
        this.value = squares
    }

    calculateWinner = (): SquareType => {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.value[a] && this.value[a] === this.value[b] && this.value[a] === this.value[c]) {
                return this.value[a];
            }
        }
        return null;
    }

    static init = (): Squares => {
        return new Squares(Array(9).fill(null))
    }
}