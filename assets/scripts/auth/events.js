'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePW = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartGame = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onGetGames = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getGames(data)
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getGame(data.game.id)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.updateGame(data)
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#changepw').on('submit', onChangePW)
  $('#sign-out').on('submit', onSignOut)
  $('#start-game').on('submit', onStartGame)
  $('#get-games').on('submit', onGetGames)
  $('#get-game').on('submit', onGetGame)
  // $('.col-xs-4').on('click', onUpdateGame)
}

module.exports = {
  addHandlers
}
