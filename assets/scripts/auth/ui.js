'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#auth-message').text('Sign-up succesful. Please Sign In to start the game.')
  $('#sign-up').css('visibility', 'hidden')
}

const signUpFailure = (data) => {
  $('#auth-message').text('Please provide a different combination of username and password.')
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  $('#sign-up').css('visibility', 'hidden')
  $('#sign-in').css('visibility', 'hidden')
  $('#changepw').css('visibility', 'visible')
  $('#sign-out').css('visibility', 'visible')
  $('#start-game').css('visibility', 'visible')
  $('#get-games').css('visibility', 'visible')
  $('#get-game').css('visibility', 'visible')
  $('#auth-message').text('Welcome! You are now ready to play.')
  // store the user object
  store.user = data.user
}

const signInFailure = (data) => {
  $('#auth-message').text('Please provide a different combination of username and password. Make sure you have already signed-up')
}

const changePWSuccess = (data) => {
  $('#auth-message').text('Your password has been changed.')
}

const changePWFailure = (data) => {
  $('#auth-message').text("Your passwords didn't match. Please provide a new combination.")
}

const signOutSuccess = (data) => {
  $('#sign-up').css('visibility', 'visible')
  $('#sign-in').css('visibility', 'visible')
  $('#changepw').css('visibility', 'hidden')
  $('#sign-out').css('visibility', 'hidden')
  $('#start-game').css('visibility', 'hidden')
  $('#get-games').css('visibility', 'hidden')
  $('#get-game').css('visibility', 'hidden')
  $('#container').css('visibility', 'hidden')
  $('#message').css('visibility', 'hidden')
  $('#restart').css('visibility', 'hidden')
  $('#auth-message').text('Good-bye!')
}

const signOutFailure = (data) => {
  $('#auth-message').text('Please try again.')
}

const startGameSuccess = (data) => {
  // store the game information required to patch
  // the ui has been taken care of in gameLogic.js
  store.game = data.game
}

const startGameFailure = (data) => {
  $('#auth-message').text('Please try again.')
}

const getGamesSuccess = (data) => {
  const games = data.games
  const gamesIds = []
  // console.log(data.games.length)
  // console.log(data.games)
  const idGetter = function () {
    for (let i = 0; i < games.length; i++) {
      gamesIds.push(games[i].id)
    }
  }
  idGetter()
  // console.log(gamesIds)
  // console.log(data.games[0].id)
  $('#auth-message').text('You have played ' + data.games.length + ' games. Their IDs are: ' + gamesIds)
}

const getGamesFailure = (data) => {
  $('#auth-message').text('Please try again. Check your internet connection')
}

const getGameSuccess = (data) => {
  // console.log(data)
  // if (data.game.over) {
  //   $('#auth-message').text('You have finished that game successfully')
  // } else {
  //   $('#auth-message').text('That game was not finished!')
  $('#auth-message').text("You've played that game before!")
}

const getGameFailure = (data) => {
  $('#auth-message').text('Please provide a different ID')
}

const updateGameSuccess = (data) => {
  console.log(data)
}

const updateGameFailure = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  getGamesSuccess,
  getGamesFailure,
  getGameSuccess,
  getGameFailure,
  updateGameSuccess,
  updateGameFailure
}
