const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('335035386923581440')) return message.channel.send("Huh.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription('<:deny:434077006200700948> Name watching status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
  client.user.setActivity(`${status}`, {  type: "WATCHING"});
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription('<:approve:434076978367299584> You sucessfully changed watching status');
  message.channel.send({ embed });
}};