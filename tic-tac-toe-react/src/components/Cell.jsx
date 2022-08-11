import React, { useState } from 'react';

function Cell({
  number,
  game,
  setGame,
  fillCell,
  setFillCell,
  setWinner,
  lose,
  setLose,
}) {
  function win(cells) {
    let winCombinaisons = {
      line: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      column: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let winCombinaison in winCombinaisons) {
      winCombinaisons[winCombinaison].forEach((element) => {
        if (
          cells[element[0]] === '' ||
          cells[element[1]] === '' ||
          cells[element[2]] === ''
        ) {
          return null;
        } else if (
          cells[element[0]] === cells[element[1]] &&
          cells[element[1]] === cells[element[2]] &&
          cells[element[0]] === cells[element[2]]
        ) {
          console.log('gagné');
          setWinner(cells[element[0]]);
        } else if (
          cells[element[0]] &&
          cells[element[1]] &&
          cells[element[2]]
        ) {
          console.log('perdu');
          setLose(!lose);
        }
      });
    }
  }

  function handleClick(number) {
    if (fillCell[number] != '') {
      alert('cliqué');
      return;
    }
    let cells = { ...fillCell };
    if (game === 'X') {
      cells[number] = 'X';
      setGame('O');
    } else {
      cells[number] = 'O';
      setGame('X');
    }
    win(cells);
    setFillCell(cells);
    console.log(cells);
  }

  return (
    <div>
      <td onClick={() => handleClick(number)}>{fillCell[number]}</td>
    </div>
  );
}

export default Cell;
