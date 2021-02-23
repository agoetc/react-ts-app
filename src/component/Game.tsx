import {useState} from "react";
import {SquareType} from "../domain/SquareType";
import {Board} from "./Board";

export function Game() {
    const [squares, setSquares] = useState<Array<SquareType>>(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)


    const handleClick = (i: number) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXTurn ? 'X' : 'O'
        setSquares(squares)
        setIsXTurn(!isXTurn)
    }

    const calculateWinner = (squares: Array<SquareType>): SquareType => {
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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }


    const winner = calculateWinner(squares);
    let status: string
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (isXTurn ? 'X' : 'O')
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}