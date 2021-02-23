import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type SquareType = 'X' | 'O' | null


type SquareProps = {
    value: SquareType
    onClick: () => void
}

function Square(props: SquareProps) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

function Board() {
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

    const renderSquare = (i: number) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        )
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


    const winner = calculateWinner(squares)
    let status: string
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (isXTurn ? 'X' : 'O')
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);