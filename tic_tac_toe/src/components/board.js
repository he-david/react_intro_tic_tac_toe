import React, { useState } from 'react';
import Square from './square';

function Board() {
    const [status, setStatus] = useState("Next player: X");
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        squaresCopy[i] = 'X';
        setSquares(squaresCopy);
    }

    const returnSquare = (i) => {
        return (
            <Square
                value={ squares[i] }
                onClick={ () => handleClick(i) }
            />
        );
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                { returnSquare(0) } { returnSquare(1) } { returnSquare(2) }
            </div>
            <div className="board-row">
                { returnSquare(3) } { returnSquare(4) } { returnSquare(5) }
            </div>
            <div className="board-row">
                { returnSquare(6) } { returnSquare(7) } { returnSquare(8) }
            </div>
        </div>
    );
}

export default Board;