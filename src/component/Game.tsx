import {useState} from "react";
import {Board} from "./Board";
import {Squares} from "../domain/Square";

export function Game() {
    const [squares, setSquares] = useState<Squares>(Squares.init)
    const [isXTurn, setIsXTurn] = useState(true)

    const handleClick = (i: number): void => {
        if (squares.calculateWinner() || squares.value[i]) {
            return;
        }
        squares.value[i] = isXTurn ? 'X' : 'O'
        setSquares(squares)
        setIsXTurn(!isXTurn)
    }

    const buildStatusMessage = (): string => {
        const winner = squares.calculateWinner();
        if (winner) {
            return 'Winner: ' + winner
        } else {
            return 'Next player: ' + (isXTurn ? 'X' : 'O')
        }
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
                <div>{buildStatusMessage()}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}