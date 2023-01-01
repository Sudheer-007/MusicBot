const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    let prefix = client.prefix


    if (!args[0]) {
   

      
      const embed = new MessageEmbed()
        .setTitle("Rockin Music")
        .setDescription(`

        **Info - [2]**
        \`help\` \`ping\`

        **Music - [15]**
        \`cqueue\` \`jump\` \`loop\` \`pause\` \`play\` \`queue\` \`radio\` \`remove\` \`repeat\` \`seek\` \`shuffle\` \`skip\` \`spotify\` \`stop\` \`volume\` 

        **Sources - [2]**
        \`Spotify\` \`YouTube\`
      `)

        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        ).setFooter(`Type r <command name> for details on a command!`)
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({ embeds: [embed] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)

          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Help Command: " + args[0])
        .addField("PREFIX:", `\`r1\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`?${command.name} ${command.usage}\``
            : `\`?${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({embeds:[embed]});
    }

  }
}
