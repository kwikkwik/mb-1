const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
    var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react("🔊")
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=WnhvR_6oC9s", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }