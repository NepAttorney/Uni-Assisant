//Command: nep!ping
module.exports = {
    name: 'tease',
    permissions: [],
    description: "Tease me! B-But don't overdo it!",
    aliases: [],
    execute(client, message, args, Discord){
        var teaseMessages = [
            "H-Hey, don't tease me out of the blue like that!",
            "Sh-Shut up! I n-not cute!",
            "B-B-B-B-B-Baka!",
            "Who told you I was a-adorable!? Jeez..."
        ]

        const teaseMessage = teaseMessages[Math.floor(Math.random() * teaseMessages.length)];

        message.channel.send(teaseMessage);
    }
}