//Messages when bot is pinged.
module.exports = {
    name: 'botpinged',
    permissions: [],
    hidden: true,
    execute(client, message, args, Discord){
        if (message.content.includes("uni!botpinged")) return;
        
        var mentionMessages = [
            "Mayhaps.",
            "I wonder how Nep Detective's doing.",
            "Yes, I do assist Nep Attorney.",
            "Alright, I'll a-assist you!"
        ]

        var mentionMessage = mentionMessages[Math.floor(Math.random() * mentionMessages.length)]

        message.channel.send(mentionMessage);
    }
}