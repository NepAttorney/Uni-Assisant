module.exports = {
    name: 'tease',
    description: "Tease me! B-But don't overdo it!",
    category: "Fun",
    callback: ({ message }) => {
        var teaseMessages = [
            "H-Hey, don't tease me out of the blue like that!",
            "Sh-Shut up! I'm n-not cute!",
            "B-B-B-B-B-Baka!",
            "Who told you I was a-adorable!? Jeez...",
            "*Flustered Uni noises*"
        ]

        const teaseMessage = teaseMessages[Math.floor(Math.random() * teaseMessages.length)];

        message.channel.send(teaseMessage);
    }
}