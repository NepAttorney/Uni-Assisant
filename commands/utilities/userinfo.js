const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: "Get some info about yourself!",
    category: "Utilities",
    callback: ({ message }) => {
         const { guild, channel } = message

         const user = message.mentions.users.first() || message.member.user
         const member = guild.members.cache.get(user.id)

         const userinfoEmbed = new MessageEmbed()
         .setColor('#66fcf1')
         .setAuthor(`User info for ${user.username}`, user.displayAvatarURL({ dynamic: true, format: "png" }))
         .setThumbnail(message.author.avatarURL)
         .addFields(
             {name: 'Username', value: user.tag},
             {name: 'Nickname', value: member.nickname || 'None'},
             {name: 'User ID', value: user.id},
             {name: 'Joined server', value: new Date(member.joinedTimestamp).toLocaleDateString()},
             {name: 'Created Account', value: new Date(user.createdTimestamp).toLocaleDateString()},
             {name: 'Role count', value: member.roles.cache.size - 1,}
         )

         message.channel.send(userinfoEmbed);
     }

}
