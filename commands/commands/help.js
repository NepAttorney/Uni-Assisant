require('dotenv').config();
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = process.env.PREFIX;

module.exports = {
  name: "help",
  aliases : [],
  permissions: [],
  description: "Shows all available bot commands.",
  async execute(client, message, args, Discord) {

    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      const ignoredDirs = []
      readdirSync("./commands/").forEach((dir) => {
        if(ignoredDirs.includes(dir)) return;
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.filter((command) => {
            let file = require(`../../commands/${dir}/${command}`);

            return !file.hidden
        }).map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("My commands:")
        .setThumbnail(client.user.displayAvatarURL({ size: 4096, format: "png" }))
        .addFields(categories)
        .setDescription(
          `Hello there, I'm Uni Assistant. In case you couldn't tell, I assist in the factory and my f-friends.`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
          .setThumbnail(client.user.displayAvatarURL({ size: 4096, format: "png" }))
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details")
        .setThumbnail(client.user.displayAvatarURL({ size: 4096, format: "png" }))
        .addField(
          "Command",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "Aliases",
            `${command.aliases}` || "None"
        )
        .addField(
            "Permissions",
            `\`${command.permissions}\`` || "None"
        )
        .addField(
          "Usage",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "Description",
          command.description
            ? command.description
            : "None."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};