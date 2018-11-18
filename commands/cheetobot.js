const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
message.channel.send("To ja!")
}
module.exports.help = {
  name: "cheetobot",
  category: "util"
}