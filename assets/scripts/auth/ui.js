'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#auth-message').text('Sign-up succesfull. Please Sign In to start the game')
  $('#sign-up').css('visibility', 'hidden')
}

const signUpFailure = (data) => {
  $('#auth-message').text('Please provide a different combination of username and password')
}

const signInSuccess = (data) => {
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
  $('#auth-message').text('Please provide a different combination of username and password')
}

const changePWSuccess = (data) => {
  console.log(data)
}

const changePWFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log(data)
}

const signOutFailure = (error) => {
  console.log(error)
}

const startGameSuccess = (data) => {
  console.log(data)
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
