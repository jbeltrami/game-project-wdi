'use strict'

// Where my code starts
// const elementId = document.getElementsByClassName('col-xs-4')
let turn = 'X'

const boardObj = $('.col-xs-4')
console.log('this is elementId: ' + boardObj)

const changeMessage = (txt) => {
  let element = $('#message')[0]
  $(element).text(txt)
}

const startGame = () => {
  changeMessage(turn + ' is the first player')
}
// code works until this line

// click event that takes an element of boardObj and reassings its value to
// whatever the variable turn is at the moment.
// This function needs to call nextMove, passing in the index at the end.

const click = $(boardObj)

const nextMove = (index) => {
  if (boardObj[index].textContent === '') {
    boardObj[index].textContent = turn
    changeTurn()
  } else {
    changeMessage('please, pick another square')
  }
}

const changeTurn = () => {
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  } changeMessage('It is ' + turn + "'s turn now")
}

module.exports = {
  boardObj,
  changeMessage,
  startGame,
  nextMove,
  changeTurn
}

//
// $(() => {
//   $('.data-id').on('click', nextMove())
// })
//

// if (table[0] === table[1] && table[1] === table[2] && table[1] !== 0) {
//   console.log('You won on the first row!')
// } else if (table[3] === table[4] && table[4] === table[5] && table[3] !== 0) {
//   console.log('You won on the second row!')
// } else if (table[6] === table[7] && table[7] === table[8] && table[6] !== 0) {
//   console.log('You won on the third row!')
// } else if (table[0] === table[3] && table[3] === table[6] && table[0] !== 0) {
//   console.log('You won on the first column!')
// } else if (table[1] === table[4] && table[4] === table[7] && table[1] !== 0) {
//   console.log('You won on the second column!')
// } else if (table[2] === table[5] && table[5] === table[8] && table[2] !== 0) {
//   console.log('You won on the third column')
// } else if (table[0] === table[4] && table[4] === table[8] && table[0] !== 0) {
//   console.log('You won on the right to left diagonal')
// } else if (table[2] === table[4] && table[4] === table[6] && table[2] !== 0) {
//   console.log('You won on the left to right diagonal')
// } else {
//   console.log('Game not finished yet')
// }

// $('.data-id').on('click', changeArray())
