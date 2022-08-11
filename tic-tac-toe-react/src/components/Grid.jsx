import React, { useState } from 'react';
import './Grid.css';
import Cell from './Cell';

function Grid() {
  const [game, setGame] = useState('X');
  const [fillCell, setFillCell] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();
  const [lose, setLose] = useState(false);

  console.log(fillCell);
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
              lose={lose}
              setLose={setLose}
            />
            <Cell
              number={1}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
              lose={lose}
              setLose={setLose}
            />
            <Cell
              number={2}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
              lose={lose}
              setLose={setLose}
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
              lose={lose}
              setLose={setLose}
            />
            <Cell
              number={4}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
              lose={lose}
              setLose={setLose}
            />
            <Cell
              number={5}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
              lose={lose}
              setLose={setLose}
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
              lose={lose}
              setLose={setLose}
            />
            <Cell
              number={7}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
              lose={lose}
              setLose={setLose}
            />
            <Cell
              number={8}
              game={game}
              setGame={setGame}
              fillCell={fillCell}
              setFillCell={setFillCell}
              winner={winner}
              setWinner={setWinner}
              lose={lose}
              setLose={setLose}
            />
          </tr>
        </tbody>
      </table>
      {winner && (
        <div>
          <p>{winner} a gagné !</p>
        </div>
      )}
      {!winner && lose && fillCell[0] && fillCell[1] && fillCell[2] && fillCell[3] && fillCell[4] && fillCell[5] && fillCell[6] && fillCell[7] && fillCell[8] && (<div>Désolé, perdu !</div>)}

      <button className='btn-restart' onClick={() => startAgain()}>
        Rejouer
      </button>
    </div>
  );
}

export default Grid;
