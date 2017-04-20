'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#auth-message').text('Sign-up succesfull. Please Sign In to start the game.')
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
  $('#auth-message').text('Please provide a different combination of username and password.')
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
  console.log(data.games.length)
  $('#auth-message').text('You have played ' + data.games.length + ' games.')
}

const getGamesFailure = (data) => {
  $('#auth-message').text('Please try again. Check your internet connection')
}

const getGameSuccess = (data) => {
  console.log(data)
}

const getGameFailure = (error) => {
  console.log(error)
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
