import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const playerX = 'X';
  const playerY = 'O';
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(false);
  
  const handleSquareClick = (index) => {
    if (squares[index] || isWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (!isPlayerX) {
      newSquares[index] = playerY;
    } else {
      newSquares[index] = playerX;
    }
    setSquares(newSquares);
    setIsPlayerX(!isPlayerX);
  }

  const isWinner = (squares) => {
    const winningSquares = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningSquares.length; i++) {
      const [one, two, three] = winningSquares[i];
      if ((squares[one] !== null) && (squares[one] === squares[two]) && (squares[one] === squares[three])) {
        return true;
      }
    }

    return false;
  }

  const winner = isWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + (isPlayerX ? 'O' : 'X');
  } else {
    status = 'Next player: ' + (isPlayerX ? 'X' : 'O');
  }

  return (
    <>
     <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleSquareClick={() => { handleSquareClick(0) }} />
        <Square value={squares[1]} handleSquareClick={() => { handleSquareClick(1) }} />
        <Square value={squares[2]} handleSquareClick={() => { handleSquareClick(2) }} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleSquareClick={() => { handleSquareClick(3) }} />
        <Square value={squares[4]} handleSquareClick={() => { handleSquareClick(4) }} />
        <Square value={squares[5]} handleSquareClick={() => { handleSquareClick(5) }} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleSquareClick={() => { handleSquareClick(6) }} />
        <Square value={squares[7]} handleSquareClick={() => { handleSquareClick(7) }} />
        <Square value={squares[8]} handleSquareClick={() => { handleSquareClick(8) }} />
      </div>
    </>
  );
}
