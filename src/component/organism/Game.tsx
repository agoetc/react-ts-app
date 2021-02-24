import {useState} from "react";
import {Board} from "../molecule/Board";
import {GameEntity} from "../../domain/GameEntity";

export function Game() {
    const [game, setGame] = useState<GameEntity>(new GameEntity)
    const [isXTurn, setIsXTurn] = useState(true)

    const handleClick = (i: number): void => {
        if (game.calculateWinner() || game.squares.value[i]) return

        game.setSquare(i, turnOf())

        setGame(game)
        setIsXTurn(!isXTurn)
    }

    const buildStatusMessage = (): string => {
        const winner = game.calculateWinner();
        if (winner) {
            return 'Winner: ' + winner
        } else {
            return 'Next player: ' + turnOf()
        }
    }

    const turnOf = () => isXTurn ? 'X' : 'O'


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={game.squares}
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