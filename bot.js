const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "b.";

client.on('ready', () => {
    console.log('I am ready!');
    
    client.user.setGame ("with Coding");
});

client.on('message', message => {
    
    if (message.author.bot) return;
    
    if (message.content.startsWith (prefix + 'ping')) {
    	message.channel.send('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
