var Discord = require("discord.js")
var client = new Discord.Client()
client.commands = new Discord.Collection();
const fs = require("fs");

fs.readdir(`./commands/`, (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() == "js")
    if (jsfile.length <= 0) {
      console.log("Nie znaleziono komend!")
    }
    jsfile.forEach((f, i) => {
      let props = require(`./commands/${f}`)
      console.log(`[Załadowano] ${f}`)
      client.commands.set(props.help.name, props)
    })
  })

client.on("ready", () => {
    console.log("Zalogowano")
    client.generateInvite().then(link => {
        console.log(`Generated bot invite link: ${link}`)
    })
})


client.on('message',async message => { 
    if(message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandfile = client.commands.get(command);
    if (commandfile) commandfile.run(client, message, args, config);
})

    
 

client.login (process.env.TOKEN )