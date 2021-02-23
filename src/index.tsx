import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type SquareType = 'X' | 'O' | null


type SquareProps = {
    value: SquareType
    onClick: () => void
}

class Square extends React.Component<SquareProps> {

    render() {
        return (
            <button
                className="square"
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}

type BoardStates = {
    squares: Array<SquareType>
    isXTurn: boolean
}

class Board extends React.Component<any, BoardStates> {
    constructor(props: any) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            isXTurn: true
        }
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice()
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isXTurn ? 'X' : 'O'
        this.setState({
            squares: squares,
            isXTurn: !this.state.isXTurn
        })
    }

    renderSquare(i: number) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    calculateWinner(squares: Array<SquareType>): SquareType {
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

    render() {
        const winner = this.calculateWinner(this.state.squares)
        let status: string
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.isXTurn ? 'X' : 'O')
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
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
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);