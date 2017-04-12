'use strict'

// Where my code starts
// const elementId = document.getElementsByClassName('col-xs-4')
let turn = 'X'

$('.col-xs-4').on('click', function () {
  if (this.textContent === '') {
    $(this).text(turn)
    checkWinner()
  } else {
    changeMessage('please, pick another square')
  }
})

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

const checkWinner = function () {
  if ($('.col-xs-4')[0].textContent === $('.col-xs-4')[1].textContent && $('.col-xs-4')[1].textContent === $('.col-xs-4')[2].textContent && $('.col-xs-4')[1].textContent !== '') {
    return changeMessage(turn + ' won on the first row!')
  } else if ($('.col-xs-4')[3].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[5].textContent && $('.col-xs-4')[3].textContent !== '') {
    return changeMessage(turn + ' won on the second row!')
  } else if ($('.col-xs-4')[6].textContent === $('.col-xs-4')[7].textContent && $('.col-xs-4')[7].textContent === $('.col-xs-4')[8].textContent && $('.col-xs-4')[6].textContent !== '') {
    return changeMessage(turn + ' won on the third row!')
  } else if ($('.col-xs-4')[0].textContent === $('.col-xs-4')[3].textContent && $('.col-xs-4')[3].textContent === $('.col-xs-4')[6].textContent && $('.col-xs-4')[0].textContent !== '') {
    return changeMessage(turn + ' won on the first column!')
  } else if ($('.col-xs-4')[1].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[7].textContent && $('.col-xs-4')[1].textContent !== '') {
    return changeMessage(turn + ' won on the second column!')
  } else if ($('.col-xs-4')[2].textContent === $('.col-xs-4')[5].textContent && $('.col-xs-4')[5].textContent === $('.col-xs-4')[8].textContent && $('.col-xs-4')[2].textContent !== '') {
    return changeMessage(turn + ' won on the third column')
  } else if ($('.col-xs-4')[0].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[8].textContent && $('.col-xs-4')[0].textContent !== '') {
    return changeMessage(turn + ' won on the right to left diagonal')
  } else if ($('.col-xs-4')[2].textContent === $('.col-xs-4')[4].textContent && $('.col-xs-4')[4].textContent === $('.col-xs-4')[6].textContent && $('.col-xs-4')[2].textContent !== '') {
    return changeMessage(turn + ' won on the left to right diagonal')
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
