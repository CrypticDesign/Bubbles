const prefix = "b!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = "NDQ2NTA5NDQ0MDc2MDExNTIw.DeHQvw.xFWs_K6vgnD-gsZKns3Nv0z2lsQ";

client.on('ready', () => {
    console.log('I am ready mate!');
    
    client.user.setActivity ("with Bubbles! | b!help");
});

client.on('message', message => {
    
    if (message.author.bot) return;
    
    msg = message.content.toLowerCase ();
    
    if (msg.startsWith (prefix + 'ping')) {
    	message.channel.send('Pong!');
  	}
    
    if (msg.startsWith (prefix + 'fortune')) {
        fortuneMessage = message.content.slice (9);
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
        case 1: message.channel.send ('Bubbles the fortune teller says **yes!**'); break;
        case 2: message.channel.send ('Bubbles the fortune teller says **no!**'); break;
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login (token);
