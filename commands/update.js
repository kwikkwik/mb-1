const db = require('quick.db'),
  Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

  // Compile Information
  let timestamp = Date.now(),
    entry = args.join(' ');

  // Form Embed
  const embed = new Discord.RichEmbed()
    .setColor(0x06238B)

  // Verify Permission
  if (message.author.id !== '335035386923581440') {

    // Configure Embed
    embed.setFooter('You do not have permission to perform this action.');

    // Return & Send Embed
    return message.channel.send(embed);

  }

  // Verify Input
  if (!entry) { // This will run if no text is given

    // Configure Embed
    embed.setFooter(`Please input text following the command.`);

    // Return & Send Embed
    return message.channel.send(embed);

  }

  // Push To Database
  await db.push('changelog', {
    entry: entry,
    timestamp: timestamp
  });

  // Configure Embed
  embed.setFooter('Creating new changelog entry.');

  // Send Embed
  message.channel.send(embed);

}