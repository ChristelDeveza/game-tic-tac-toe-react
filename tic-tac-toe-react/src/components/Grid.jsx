import React, { useState } from 'react';
import './Grid.css';
import Cell from './Cell';

function Grid() {
  const [game, setGame] = useState('X');
  const [fillCell, setFillCell] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();
 console.log(fillCell)
  function startAgain() {
    setWinner(null);
    setFillCell(Array(9).fill(''));
  }

  return (
    <div>
      <table>
        Joueur : {game}
        <tbody>
          <tr>
            <Cell
              number={0}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
            <Cell
              number={1}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
            <Cell
              number={2}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
          </tr>
          <tr>
            <Cell
              number={3}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
            <Cell
              number={4}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
            <Cell
              number={5}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
          </tr>
          <tr>
            <Cell
              number={6}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
            <Cell
              number={7}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
            <Cell
              number={8}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
            />
          </tr>
        </tbody>
      </table>
      {winner && (
        <div>
          {' '}
          <p>{winner} a gagné !</p>
          <button className='btn-restart' onClick={() => startAgain()}>
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}

export default Grid;
