'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  // store the user object
  store.user = data.user
}

const signInFailure = (error) => {
  console.log(error)
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
  startGameFailure
}
