import React, { useState } from 'react';
import Styles from './tictactoe.module.css';

function Square({ onClick, value }) {
    return (
        <button className={Styles.squere} onClick={onClick}>
            {value}
        </button>
    );
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true);

    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return
            //so if any of calculate winner is true
            //or if squeres[i] is true
            //dont change anything
        }
        const updatedSquares = [...squares];
        updatedSquares[i] = isX ? "X" : "O";
        setSquares(updatedSquares);
        setIsX((p) => !p);
    };
    const winner = calculateWinner(squares)
    let status

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = 'Next player: ' + (isX ? 'X' : 'O');
    }

    const handleRestart = () => {
        setIsX(true)
        setSquares(Array(9).fill(null))
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }

    return (
        <div className={Styles.board} >
            <div className={Styles.boardrow}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={Styles.boardrow}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={Styles.boardrow}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className={Styles.Status} >{status}</div>
            <button className={Styles.Restart } onClick={handleRestart}>Restart Game!</button>
        </div>
    )
}



function calculateWinner(squares) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Board;