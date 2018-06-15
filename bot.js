const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Baketball') {
    	message.reply('我最愛黑子的籃球了');
  	}
});
client.on('message', message => {
    if (message.content === 'Lonely') {
    	message.reply('公主.主人在叫我嗎?');
  	}
});
client.on('message', message => {
   if (message.content === 'Funny') {
    	message.reply('我可不覺得.我很寂寞');
  	}
}); 

client.on('message', message => {
   if (message.content === 'XD') {
    	message.reply('我可不覺得.我很寂寞');
  	}
}); 
client.on('message', message => {
   if (message.content === 'HAHA') {
    	message.sendmessage('我可不覺得.我很寂寞');
  	}
}); 
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
