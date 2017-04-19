'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#auth-message').text('Sign-up succesfull. Please Sign In to start the game')
  $('#sign-up').css('visibility', 'hidden')
}

const signUpFailure = (data) => {
  // $('#auth-message').text('Please provide a different combination of username and password')
  console.log(data)
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  $('#sign-up').css('visibility', 'hidden')
  $('#changepw').css('visibility', 'visible')
  $('#sign-out').css('visibility', 'visible')
  $('#start-game').css('visibility', 'visible')
  $('#get-games').css('visibility', 'visible')
  $('#get-game').css('visibility', 'visible')
  $('#auth-message').text('Welcome! You are now ready to play')
  // store the user object
  store.user = data.user
}

const signInFailure = (data) => {
  console.log(data)
  $('#auth-message').text('Please provide a different combination of username and password')
}

const changePWSuccess = (data) => {
  console.log(data)
}

const changePWFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  $('#changepw').css('visibility', 'hidden')
  $('#sign-out').css('visibility', 'hidden')
  $('#start-game').css('visibility', 'hidden')
  $('#get-games').css('visibility', 'hidden')
  $('#get-game').css('visibility', 'hidden')
  $('#auth-message').text('Welcome! You are now ready to play')
}

const signOutFailure = (error) => {
  console.log(error)
}

const startGameSuccess = (data) => {
  store.game = data.game
  console.log(data)
  console.log(data.game)
}

const startGameFailure = (error) => {
  console.log(error)
}

const getGamesSuccess = (data) => {
  console.log(data)
}

const getGamesFailure = (error) => {
  console.log(error)
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
