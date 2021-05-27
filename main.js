const fs = require('fs');

const Discord = require('discord.js');

const keepAlive = require('./server');

const WOKCommands = require('wokcommands');

require('dotenv').config();

const client = new Discord.Client({ partials: [ "MESSAGE", "CHANNEL", "REACTION"] });

client.events = new Discord.Collection();

require(`./handlers/event_handler`)(client, Discord);

client.once('ready', () => {
    client.user.setActivity('Nep Attorney', { type: 'LISTENING' });

    new WOKCommands(client, {
        commandsDir: "commands",
        featuresDir: 'features',
        showWarns: false,
        disabledDefaultCommands: [
            "command",
            "language",
            "prefix",
            "requiredrole"
        ]
    })
    .setDefaultPrefix(process.env.PREFIX)
    .setDisplayName("Uni Assistant")
    .setColor("b260d6")
    .setCategorySettings([
        {
            name: "Utilities",
            emoji: "🔨"
        },
        {
            name: "Fun",
            emoji: "<:UniAssistant:847575340095504404>"
        },
        {
            name: "Moderation",
            emoji: "<:Moderation:847576504937742388>"
        }
    ])
});

keepAlive()
client.login(process.env.DISCORD_TOKEN);