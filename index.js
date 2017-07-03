const Discord = require('discord.js');
const bot = new Discord.Client();
var soundNo = 1;

bot.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content == '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  else if (message.content == '/leave') {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.leave();
    }
  }
});

bot.on('message', (message) => {
    if(message.content == 'ping'){
        message.channel.send('pong');
    }
    else if(message.content == '/myname'){
        message.channel.send("Hey! You're not " + message.member.displayName + ". You're that scumbag " + message.author.username + "!");
    }
})

bot.on('guildMemberSpeaking', (member, speaking) => {
    if(speaking) {

        switch(soundNo) {
            case 1:
                sound = 'baby1.mp3'
                soundNo++;
                break;
            case 2:
                sound = 'baby2.mp3'
                soundNo++;
                break;
            case 3:
                sound = 'baby3.mp3'
                soundNo++;
                break
            default:
                sound = 'baby4.mp3'
                soundNo = 1
        }

        var broadcast = bot.createVoiceBroadcast().playFile('./sounds/' + sound);
        var dispatcher = member.voiceChannel.connection.playBroadcast(broadcast);
    }
    else {
        var broadcast = bot.createVoiceBroadcast().playFile('./sounds/baby1.mp3');
        var dispatcher = member.voiceChannel.connection.playBroadcast(broadcast);
        dispatcher.end();
    }
})

bot.login('');