'use strict'

// Where my code starts
// const elementId = document.getElementsByClassName('col-xs-4')
let turn = 'X'

let gameArray = ['', '', '', '', '', '', '', '', '']

const showRestart = function () {
  $('#restart').css('visibility', 'visible')
}

// start game button functionality
$('#start-game').on('click', function () {
  $('#container').css('visibility', 'visible')
  $('#message').css('visibility', 'visible')
  $('#auth-message').css('visibility', 'hidden')
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('.col-xs-4').text('')
  turn = 'X'
  startGame()
})

// restart button functionality
$('#restart').on('click', function () {
  $('.col-xs-4').text('')
  clickEvent()
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('#restart').css('visibility', 'hidden')
  turn = 'X'
  startGame()
})

const clickEvent = function () {
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
}

// Board click, JQuery functionality
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

// Visual interaction with the user. Change the messages.
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
  if (result === false) {
    changeMessage('It is a draw!')
    showRestart()
  }
}

const gameOver = () => {
  changeMessage(turn + ' Won!')
  $('.col-xs-4').unbind('click')
  showRestart()
}

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
