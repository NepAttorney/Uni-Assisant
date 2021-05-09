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
            "Alright, I'll a-assist you!",
            "My day's been great. Hope yours is too.",
            "I kissed Nep Detective. W-Wait, you heard nothing!",
            "Sounds interesting.",
            "I... l-love you too.",
            "Baka."
        ]

        var mentionMessage = mentionMessages[Math.floor(Math.random() * mentionMessages.length)]

        message.channel.send(mentionMessage);
    }
}