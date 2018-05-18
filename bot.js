const Discord = require('discord.js');

var client = new discord.Client();

const token = "NDQ2NTA5NDQ0MDc2MDExNTIw.Dd_stw.5eNsxErZsIiq4Z8O8-I3CXQsIWk";

client.on ("ready", () => {
    console.log ("Ready!");
    
    client.user.setGame ("with Codes!");
});

const prefix = "b!"
client.on ("message", (message) => {
    
    if (message.author.bot) return;
    
    if (message.content.startsWith (prefix + "ping")) {
        message.reply ("Pong!");
        
    }
    
});

client.login (token);
