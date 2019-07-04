const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595973862370443265")
setInterval(function() {
channel.send(`hdpo6r`);
}, 30)
})

client.login(process.env.BOT_TOKEN);