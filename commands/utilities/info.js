const { version } = require('../../package.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'info',
    category: "Utilities",
    description: "Get some info about me!",
    aliases: [],
    callback: ({ client, message }) => {
        const infoEmbed = new MessageEmbed()

        .setColor('#c42fc5')
        .setTitle('Bot Info')
        .setThumbnail(client.user.avatarURL({ size: 4096, format: "png" }))
        .addFields(
            {name: 'Name', value: 'Uni Assistant'},
            {name: 'Created By', value: 'HamoodyTheWolf#7257'},
            {name: 'Version', value: version},
        )

        message.channel.send(infoEmbed);
    }
}