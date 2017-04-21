'use strict'

const updateGame = require('./auth/api.js').updateGame

// Where my code starts
// const elementId = document.getElementsByClassName('col-xs-4')
let turn = 'X'
let win = false
let gameArray = ['', '', '', '', '', '', '', '', '']

// start game button functionality
$('#start-game').on('click', function () {
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('#container').css('visibility', 'visible')
  $('#message').css('visibility', 'visible')
  $('#auth-message').text('')
  $('.col-xs-4').text('')
  turn = 'X'
  win = false
  changeMessage(turn + ' is the first player')
  $('#restart').css('visibility', 'hidden')
  $('.col-xs-4').on('click', boardInteraction)
})

// restart button functionality
$('#restart').on('click', function () {
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('#auth-message').text('')
  $('.col-xs-4').text('')
  turn = 'X'
  win = false
  changeMessage(turn + ' is the first player')
  $('#restart').css('visibility', 'hidden')
  $('.col-xs-4').on('click', boardInteraction)
})

// Board click, JQuery functionality

const boardInteraction = function () {
  $('#auth-message').text('')
  const update = {cell: {index: $(this).data('id'), value: turn}}
  if (this.textContent === '') {
    $(this).text(turn)
    gameArray[$(this).data('id')] = turn
    checkWinner()
    if (win) {
      update.over = true
      return
    }
    changeTurn()
    checkDraw()
  } else {
    changeMessage('please, pick another square')
    update.over = false
  }
  updateGame({game: update})
}

// Visual interaction with the user. Change the messages.
const changeMessage = (txt) => {
  const element = $('#message')[0]
  $(element).text(txt)
}

const changeTurn = () => {
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  } changeMessage('It is ' + turn + "'s turn now")
}

const checkDraw = function () {
  const result = gameArray.some(function (element) {
    return element === ('')
  })
  if (result === false) {
    changeMessage('It is a draw!')
    $('.col-xs-4').off('click')
    $('#restart').css('visibility', 'visible')
    return
  }
}

const gameOver = () => {
  changeMessage(turn + ' Won!')
  $('.col-xs-4').off('click')
  $('#restart').css('visibility', 'visible')
}

const checkWinner = function () {
  if (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2] && gameArray[1] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[3] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[6] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6] && gameArray[0] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7] && gameArray[1] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[2] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[0] !== '') {
    win = true
    gameOver()
    return
  } else if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[2] !== '') {
    win = true
    gameOver()
    return
  }
}

module.exports = {
  changeMessage,
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
