import {useState} from "react";
import {Board} from "../molecule/Board";
import {GameEntity} from "../../domain/GameEntity";

export function Game() {
    const [game, setGame] = useState<GameEntity>(new GameEntity)

    const handleClick = (i: number): void => {
        if (game.canSet(i)) {
            game.setSquare(i)

            // hooksがObjectの変更を探知しないので、とりあえずの対処
            setGame(Object.assign({}, game))
        } else {
            return
        }
    }

    const buildStatusMessage = (): string => {
        const winner = game.calculateWinner();
        if (winner) {
            return 'Winner: ' + winner
        } else {
            return 'Next player: ' + game.turn // FIXME: 何故か反映されない
        }
    }

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