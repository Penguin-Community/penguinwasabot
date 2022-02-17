const Discord = require("discord.js")
module.exports = {
  name: "playSong",
  async execute(queue, song){
    queue.client.distube.startduration = new Date()
    const playEmbed = new Discord.MessageEmbed()
	    .setColor('RANDOM')
	    .setTitle(`Now Playing ${song.name} 🎶`)
      .setDescription(`⌚ Song Duration: \`${song.formattedDuration}\``)
	    .setImage(song.thumbnail)
	    .setTimestamp()
      .setFooter(`Requested by: ${song.user.username}`)
      queue.textChannel.send({ embeds: [playEmbed] })
  },
}