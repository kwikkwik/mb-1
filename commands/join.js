const Discord = require('discord.js');

exports.run = (client, message, args) => {
      const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }