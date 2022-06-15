import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square() {
    return (
        <button className="square">
            {/*TODO*/}
        </button>
    );
}

function Board() {
    const [status, setStatus] = useState("Next player: X");

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
}

function Game() {
    return ( 
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
  
// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  