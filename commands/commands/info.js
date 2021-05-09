const { version } = require('@root/package.json');

module.exports = {
    name: 'info',
    permissions: [],
    description: "Get some info about me!",
    aliases: [],
    execute(client, message, args, Discord){
        const infoEmbed = new Discord.MessageEmbed()

        .setColor('#c42fc5')
        .setTitle('Bot Info')
        .setThumbnail(client.user.avatarURL({ size: 4096, format: "png" }))
        .addFields(
            {name: 'Name', value: 'Uni Assistant'},
            {name: 'Created By', value: 'HamoodyTheWolf#7257'},
            {name: 'Version', value: version},
            {name: 'Created On', value: '7th May 2021'},
            {name: 'Updated On', value: '9th May 2021'}
        )

        message.channel.send(infoEmbed);
    }

}