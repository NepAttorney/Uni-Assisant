module.exports = {
    name: 'join',
    permissions: ["ADMINISTRATOR"],
    category: "Utilities",
    description: "Let me join a VC!",
    hidden: true,
    guildOnly: true,
    callback: ({ message }) => {
        if (message.author.id !== '428288065115783172') return
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply("you must be in a Voice Channel.")
            return;
        }

        voice.channel.join()
    }
}