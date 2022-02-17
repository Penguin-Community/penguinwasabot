const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "wave",
  run: async (client, message, args) => {
    const hello_gifs = [
    'https://c.tenor.com/NjsosaK61UIAAAAC/anime-girl.gif',
    'https://c.tenor.com/meiDmToBf4sAAAAC/anime-wave.gif',
    'https://c.tenor.com/FMpLzF4UJhwAAAAC/kisumi-wave.gif',
    'https://c.tenor.com/xLkmU4JRI7oAAAAC/wave-snorlax.gif',
    'https://c.tenor.com/Dwfua5i1kQwAAAAC/hi-wave.gif'
    ]
    let mention = message.mentions.users.first();
    if(!mention) return message.reply('Mention someone first, noob')
    if(mention === message.author) return message.reply('Holy shit you so lonely :(')
    function wave(){
      return hello_gifs[Math.floor(Math.random() * hello_gifs.length)];
    }
    const waveEmbed = new MessageEmbed()
     .setTitle(`${message.author.username} waves at ${message.mentions.users.first().username}`)
     .setImage(wave())
     .setFooter({ text: 'Wave..... Uhh footer text(why did i even keep this)' })
    message.channel.send({ embeds: [waveEmbed] });
  }
}