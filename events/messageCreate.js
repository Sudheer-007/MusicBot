module.exports.run = async (client, message) => {

  if (message.author.bot || !message.guild) return;

  if (!message.content.startsWith(client.config.prefix)) return;


  if (!message.member) message.guild.fetchMembers(message);

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);



  const cmd = args.shift().toLowerCase();


  if (cmd.length === 0) return;


  let command = client.commands.get(cmd)


  if (!command) command = client.commands.get(client.aliases.get(cmd))
  const player = client.poru.players.get(message.guild.id);
  const memberChannel = message.member.voice.channelId;
  const botChannel = message.guild.me.voice.channelId;

  if (!command) return

    if (command.inVc && !memberChannel) {
      return message.channel.send('You must be in a Voice Channel to use this Command!')
    }
  
  if (command.sameVc && player && botChannel !== memberChannel) {

    return message.channel.send('You must be in the same Voice Channel as me!')


  }

  if (command.player && !player) {
    return (`No Player exists for this Guild!`)
  }
    if (command.current && !player.currentTrack){
message.channel.send("There is nothing playing right now!")}

  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments!`)
  }
  if (command.owner) {
    if (message.author.id !== "") return;
  }
  if (command) command.run(client, message, args)





}