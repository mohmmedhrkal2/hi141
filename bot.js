const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("549319064162664468")
setInterval(function() {
channel.send(` @~ Ňajmih#5831 @~ Ňajmih#5831 @~ Ňajmih#5831 @~ Ňajmih#5831 @~ Ňajmih#5831 @~ Ňajmih#5831 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);