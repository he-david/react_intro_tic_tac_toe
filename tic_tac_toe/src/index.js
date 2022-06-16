import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/board';
import Move from './components/move';
import './index.css';

function Game() {

    const [status, setStatus] = useState("Next player: X");
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const calculateWinner = (squares) => {
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

    const handleClick = (i) => {
        const historyCopy = history.slice(0, stepNumber + 1);
        const squaresCopy = [...historyCopy[historyCopy.length - 1].squares];

        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        const winner = calculateWinner(squaresCopy);
        const newStatus = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'O' : 'X'}`;

        setHistory(historyCopy.concat([{
            squares: squaresCopy
        }]));
        setXIsNext(!xIsNext);
        setStatus(newStatus);
        setStepNumber(historyCopy.length);
    }

    const jumpTo = (step) => {
        const winner = calculateWinner([...history[step].squares]);
        const newStatus = winner ? `Winner: ${winner}` : `Next player: ${step % 2 === 0 ? 'X' : 'O'}`;

        setStepNumber(step);
        setXIsNext(step % 2 === 0);
        setStatus(newStatus);
    }

    return ( 
        <div className="game">
            <div className="game-board">
                <Board 
                    squares={ history[stepNumber].squares}
                    onClick={ (i) => handleClick(i) }
                />
            </div>
            <div className="game-info">
                <div>{ status }</div>
                <ol>{
                    history.map((_, move) => {
                        const desc = move ? "Go to move #" + move : "Go to game start"; // 0 -> false
                        return <Move key={move} onClick={ () => jumpTo(move) } desc={ desc }/>
                    }) 
                }</ol>
            </div>
        </div>
    );
}
  
// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  