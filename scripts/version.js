// Description:
//   Get version info for debugging in Rocket.Chat
//
// Dependencies:
//   hubot-rocketchat
//
// Configuration:
//   None
//
// Commands:
//   bot rc-version - < Tells you the Hubot, Driver and Rocket.Chat versions >
//
// Notes:
//   Version 1.0
//
// Author:
//   Rocket.Chat
module.exports = function(robot) {
  robot.respond(/\brc(-|\s)version\b/i, function(res) {
    package = require('../package.json')
    res.send(`You're using adapter version ${package.json}`)
  })
}