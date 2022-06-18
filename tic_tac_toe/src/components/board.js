import React from 'react';
import Square from './square';

function Board(props) {

    const returnSquare = (i) => {
        return (
            <Square
                key={i}
                value={ props.squares[i] }
                className={ props.highlighted?.includes(i) ? 'highlighted' : '' }
                onClick={ () => props.onClick(i) }
            />
        );
    }

    return (
        <div>
            {
                Array(3).fill(0).map((_, ind) => {
                    return (
                        <div key={ind} className="board-row">
                            {
                                Array(3).fill(0).map((_, innerInd) => {
                                    return returnSquare(ind * 3 + innerInd);
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Board;