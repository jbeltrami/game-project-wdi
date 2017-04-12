'use strict'

function nextMove (elementId) {
  if (elementId.textContent === '') {
    elementId.textContent = document.turn
    changeTurn()
  } else {
    changeResponse('pick another square, dummy!')
  }
}

function changeTurn () {
  if (document.turn === 'X') {
    document.turn = 'O'
  } else {
    document.turn = 'X'
  }
  changeResponse('it\'s ' + document.turn + '\'s turn now')
}
