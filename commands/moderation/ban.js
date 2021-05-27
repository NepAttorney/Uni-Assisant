const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: "Ban someone from the server!",
    category: "Moderation",
    callback: ({ message, args }) => {
        const member = message.mentions.users.first();
        const reason = args[1] || "None."
        if(member){
            const banTarget = message.guild.members.cache.get(member.id);
            banTarget.ban({
                reason
            });

            message.channel.send(
                new MessageEmbed()
                .setTitle("User has been banned!")
                .setColor("#ff0000")
                .setThumbnail(member.avatarURL({ size: 4096, dynamic: true }))
                .setDescription(`${member.tag} has been banned from the factory!\nReason: ${reason}`)
            );
        } else {
            message.channel.send("You can't ban the void.");
        }
    }
}