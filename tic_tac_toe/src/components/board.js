import React from 'react';
import Square from './square';

function Board(props) {

    const returnSquare = (i) => {
        return (
            <Square
                value={ props.squares[i] }
                onClick={ () => props.onClick(i) }
            />
        );
    }

    return (
        <div>
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