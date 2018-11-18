var Discord = require("discord.js")
var client = new Discord.Client()

client.on("ready", () => {
    console.log("Zalogowano")
    client.generateInvite().then(link => {
        console.log(`Generated bot invite link: ${link}`)
    })
})

client.on('message',async message => { 
    
    if (message.content == "!avatar") {
    message.reply("Oto twój Avatar "+message.author.avatarURL)
    }
    if (message.content == "ping") {
        message.channel.send("pong")
    }
    if (message.content =="pong"){
        message.channel.send("ping")
    }
    if (message.content =="Chetobot"){
         message.channel.send("To ja!")
    }
 
    
 

client.login (process.env.TOKEN)