const Discord = require("discord.js")
module.exports = {
  name: "interactionCreate",
  async execute(interaction){
    const queue = interaction.client.distube.getQueue(interaction)
    if(!queue) return interaction.reply({content: "Nothing playing lol.", ephemeral: true})
    const song = queue.songs[0]
    const playEmbed = new Discord.MessageEmbed()
	    .setColor('RANDOM')
	    .setTitle(`Now Playing ${song.name} 🎶`)
      .setDescription(`⌚ Song Duration: \`${song.formattedDuration}\``)
	    .setImage(song.thumbnail)
	    .setTimestamp()
      .setFooter({text: `Requested by: ${song.user.username}`})
    const mesgRow = new Discord.MessageActionRow()
    .addComponents(
     new Discord.MessageButton()
      .setCustomId("pausebtn")
      .setLabel("⏸️")
      .setStyle("PRIMARY"),
     new Discord.MessageButton()
      .setCustomId("skpbtn")
      .setLabel("⏩")
      .setStyle("PRIMARY")
    );
    const mesgRowR = new Discord.MessageActionRow()
    .addComponents(
     new Discord.MessageButton()
      .setCustomId("pausebtn")
      .setLabel("▶️")
      .setStyle("PRIMARY"),
     new Discord.MessageButton()
      .setCustomId("skpbtn")
      .setLabel("⏩")
      .setStyle("PRIMARY")
    );
    if(interaction.customId === "pausebtn"){
      if(!queue) return interaction.reply({content: "Nothing playing lol.", ephemeral: true})
      if(queue.paused){
        queue.resume()
        interaction.message.edit({embeds: [playEmbed], components: [mesgRow]})
        interaction.reply({content: "Resumed", ephemeral: true})
        return;
      }
      if(queue.playing){
        queue.pause()
        interaction.message.edit({embeds: [playEmbed], components: [mesgRowR]})
        interaction.reply({content: "Paused", ephemeral: true})
        return;
      }
    }
    if(interaction.customId === "skpbtn"){
      if(!queue) return interaction.reply({content: "Nothing playing lol.", ephemeral: true})
      if(interaction.user.id !== song.user.id) return interaction.reply({content: "Only the one who requested this song can skip it. Sadge.", ephemeral: true})
      try {
        if(queue.songs.length > 1){
          interaction.client.distube.skip(interaction)
          interaction.reply({content: 'Skipped!', ephemeral: true})
          return;
        };
        if(queue.songs.length >= 1){
          interaction.client.distube.stop(interaction)
          interaction.reply({content: 'Skipped!', ephemeral: true})
          return;
        };
      } catch (e) {
          interaction.reply(`${e}`)
      }
    }
  },
}
