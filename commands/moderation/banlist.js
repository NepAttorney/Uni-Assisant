const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'banlist',
    permissions: ["BAN_MEMBERS"],
    description: "Check the users who've been banned!",
    category: "Moderation",
    callback: async ({ message }) => {
        const banList = await message.guild.fetchBans()
        const bannedMembers = (await banList).map((member) => member.user.tag).join("\n");

        message.channel.send(
            new MessageEmbed()
            .setTitle(`List of banned users in ${message.guild.name}`)
            .setColor("#ff0000")
            .setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
            .setDescription(bannedMembers)
        )
    }
}