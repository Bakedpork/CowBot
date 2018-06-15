const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  if(message.content === "test") {
    message.channel.send("五分熟機械人");
  }
  if(message.content === "Cow") {
    message.channel.send("我就是五分熟機械人");
  }
  if(message.content === "Server Open") {
    message.channel.send("伺服器已開啟");
  }
  if(message.content === "Server close") {
    message.channel.send("伺服器已關閉");
  }
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
