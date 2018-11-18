const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
message.channel.send("ping")
}
module.exports.help = {
  name: "pong",
  category: "util"
}