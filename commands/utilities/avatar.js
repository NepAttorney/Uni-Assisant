const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ["pfp"],
    category: "Utilities",
    description: "Get your avatar or someone elses!",
    expectedArgs: "[@user]",
    callback: ({ message }) => {
        let member = message.mentions.users.first() || message.author;

        let avatar = member.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })

        let avatarEmbed = new MessageEmbed()
        .setColor('#327eeb')
        .setTitle(member.tag)
        .setImage(avatar)

        message.channel.send(avatarEmbed);
    }
}