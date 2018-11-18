const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
    message.reply("Oto twój Avatar "+message.author.avatarURL)
}
module.exports.help = {
  name: "avatar",
  category: "util"
}