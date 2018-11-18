const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
var numer = args[0]
message.channel.bulkDelete(numer) 
}
module.exports.help = {
  name: "delete",
  category: "util"
}