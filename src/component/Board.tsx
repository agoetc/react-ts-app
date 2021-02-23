import {Square} from "./Square";
import {Squares} from "../domain/Square";

type BoardProps = {
    squares: Squares
    onClick: (i: number) => void
}

export function Board(props: BoardProps) {

    const renderSquare = (i: number) => {
        return (
            <Square
                value={props.squares.value[i]}
                onClick={() => props.onClick(i)}
            />
        )
    }


    return (
        <div>
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
