'use strict'

// Where my code starts
// const elementId = document.getElementsByClassName('col-xs-4')
let turn = 'X'

const gameArray = ['', '', '', '', '', '', '', '', '']

$('.col-xs-4').on('click', function () {
  if (this.textContent === '') {
    $(this).text(turn)
    gameArray[$(this).data('id')] = turn
    checkWinner()
    checkDraw()
  } else {
    changeMessage('please, pick another square')
  }
})

const gameOver = () => {
  changeMessage(turn + ' Won!')
  $('.col-xs-4').unbind('click')
}

const changeMessage = (txt) => {
  const element = $('#message')[0]
  $(element).text(txt)
}

const startGame = () => {
  changeMessage(turn + ' is the first player')
}

const changeTurn = () => {
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  } changeMessage('It is ' + turn + "'s turn now")
}

const isEmpty = function (element) {
  return element === ('')
}

const checkDraw = function () {
  const result = gameArray.some(isEmpty)
  console.log(result)
  if (result === false) {
    changeMessage('It is a draw!')
  }
}

// const checkDraw = function () {
//   if ($('.col-xs-4') !== '') {
//     changeMessage('It is a Draw!')
//     $('.col-xs-4').unbind('click')
//   }
// }

const checkWinner = function () {
  if ($('.col-xs-4')[0].textContent === $('.col-xs-4')[1].textContent && $('.col-xs-4')[1].textContent === $('.col-xs-4')[2].textContent && $('.col-xs-4')[1].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[3].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[5].textContent && $('.col-xs-4')[3].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[6].textContent === $('.col-xs-4')[7].textContent && $('.col-xs-4')[7].textContent === $('.col-xs-4')[8].textContent && $('.col-xs-4')[6].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[0].textContent === $('.col-xs-4')[3].textContent && $('.col-xs-4')[3].textContent === $('.col-xs-4')[6].textContent && $('.col-xs-4')[0].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[1].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[7].textContent && $('.col-xs-4')[1].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[2].textContent === $('.col-xs-4')[5].textContent && $('.col-xs-4')[5].textContent === $('.col-xs-4')[8].textContent && $('.col-xs-4')[2].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[0].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[8].textContent && $('.col-xs-4')[0].textContent !== '') {
    return gameOver()
  } else if ($('.col-xs-4')[2].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[6].textContent && $('.col-xs-4')[2].textContent !== '') {
    return gameOver()
  } else {
    changeTurn()
  }
}

module.exports = {
  changeMessage,
  startGame,
  changeTurn,
  checkWinner
}

// $('.col-xs-4')[0].textContent === ('') &&
// $('.col-xs-4')[1].textContent === ('') &&
// $('.col-xs-4')[2].textContent === ('') &&
// $('.col-xs-4')[3].textContent === ('') &&
// $('.col-xs-4')[4].textContent === ('') &&
// $('.col-xs-4')[5].textContent === ('') &&
// $('.col-xs-4')[6].textContent === ('') &&
// $('.col-xs-4')[7].textContent === ('') &&
// $('.col-xs-4')[8].textContent === ('') &&

  // return changeMessage('It is a draw!')
