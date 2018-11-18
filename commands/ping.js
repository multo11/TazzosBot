const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
message.channel.send("pong")
}
module.exports.help = {
  name: "ping",
  category: "util"
}