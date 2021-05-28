const Discord = require('discord.js');

/**
 * @param {Discord.CLient} client 
 * @param {Discord.Message} message 
 */
module.exports = async(Discord, client, message) =>{
    if (message.author.bot) return false;

    if(message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if(message.mentions.has(client.user.id)) {
        let mentionMessages = [
            "Mayhaps.",
            "I wonder how Nep Detective's doing.",
            "Yes, I do assist Nep Attorney.",
            "Alright, I'll a-assist you!",
            "My day's been great. Hope yours is too.",
            "I kissed Detective. W-Wait, you heard nothing!",
            "Sounds interesting.",
            "I... l-love you too.",
            "Baka.",
            "I-It's not like I'm a tsun or anything!",
            "Bang!"
        ]

        const mentionMessage = mentionMessages[Math.floor(Math.random() * mentionMessages.length)]

        message.channel.send(mentionMessage);
    };
}