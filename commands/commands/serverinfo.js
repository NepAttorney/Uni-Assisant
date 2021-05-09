module.exports = {
    name: 'serverinfo',
    permissions: [],
    description: "Get some information about the server!",
    aliases: [],
    execute(client, message, args, discord){
        const { guild } = message

        const { name, region, memberCount, owner, id, createdAt } = guild
        const icon = guild.iconURL({ format: "png" })

        const serverInfoEmbed = new discord.MessageEmbed()
        .setTitle(`Server info for ${name}`)
        .setThumbnail(icon)
        .addFields(
        {name: 'Owner', value: owner},
        {name: 'Server ID', value: id},
        {name: 'Region', value: region},
        {name: 'Members', value: memberCount},
        {name: 'Created At', value: createdAt.toLocaleString()}
        )

        message.channel.send(serverInfoEmbed);
    }
}