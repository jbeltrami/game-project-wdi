'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// code starts here

const gameLogic = require('./gameLogic.js')

gameLogic.startGame()

console.log(gameLogic.boardObj)
// console.log('This is my changeMessage: ' + gameLogic.changeMessage)

// gameLogic.boardObj[2].innerHTML = 'O'

module.export = authEvents
