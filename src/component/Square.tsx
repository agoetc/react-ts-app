import {SquareType} from "../domain/SquareType";

type SquareProps = {
    value: SquareType
    onClick: () => void
}

export function Square(props: SquareProps) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}