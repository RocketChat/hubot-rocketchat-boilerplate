// Description:
//    An example script, tells you the time. See below on how documentation works.
//    https://github.com/hubotio/hubot/blob/master/docs/scripting.md#documenting-scripts
// 
// Commands:
//    newbot what time is it? - Tells you the time
//    newbot what's the time? - Tells you the time
//
module.exports = (robot) => {
  robot.respond(/(what time is it|what's the time)/gi, (res) => {
    const time = new Date()
    res.reply(`It's ${time.getHours()}:${time.getMinutes()} and ${time.getSeconds()} seconds`)
  })
}