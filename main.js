require('module-alias/register');

const fs = require('fs');

const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ partials: [ "MESSAGE", "CHANNEL", "REACTION"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.categories = fs.readdirSync('./commands/');

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () => {
    client.user.setActivity('Nep Attorney', { type: 'LISTENING' });    
});

client.on('message', async message => {
    // Check if Bot was pinged
    if(message.author.bot) return false;

    if(message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if(message.mentions.has(client.user.id)) {
        client.commands.get('botpinged').execute(client, message, Discord);
    };
});

client.login(process.env.DISCORD_TOKEN);