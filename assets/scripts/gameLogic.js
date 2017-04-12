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

// function nextMove (elementId) {
//   if (elementId.textContent === '') {
//     elementId.textContent = document.turn
//     changeTurn()
//   } else {
//     changeResponse('pick another square, dummy!')
//   }
// }

module.exports = {
  boardObj,
  changeMessage,
  startGame
}

//
// $(() => {
//   $('.data-id').on('click', nextMove())
// })
//
// function nextMove (elementId) {
//   if (elementId.textContent === '') {
//     elementId.textContent = document.turn
//     changeTurn()
//   } else {
//     changeResponse('pick another square, dummy!')
//   }
// }
//
// function changeTurn () {
//   if (document.turn === 'X') {
//     document.turn = 'O'
//   } else {
//     document.turn = 'X'
//   }
//   changeResponse('it\'s ' + document.turn + '\'s turn now')
// }

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
