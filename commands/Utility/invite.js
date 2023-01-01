const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
module.exports = {
  name: "invite",
  run: async (client, message, args) => {
    let prefix = client.prefix


    if (!args[0]) {
   

      
      const embed = new MessageEmbed()
        .setTitle("Rockin Music")
        .setDescription(`Invite Link:- [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)

        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({ embeds: [embed] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );
    }
  }
}
