const Discord = require("discord.js")
const Voice = require('@discordjs/voice');
const fs = require('fs')
module.exports = {
  name: "interactionCreate",
  async execute(interaction){
    //SoundBoard
    if(interaction.customId === "soundboardbtn"){
      var voiceChannel = interaction.member.voice.channel;
      if(!voiceChannel){
        interaction.message.channel.send("You need to be in a voice channel.")
        return
      }
      interaction.reply({content: "Playing ping", ephemeral: true});
      const connection = Voice.joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: interaction.message.member.guild.id,
        adapterCreator: interaction.message.guild.voiceAdapterCreator,
      });
      const audioPlayer = Voice.createAudioPlayer();
      connection.subscribe(audioPlayer);
      let resource = Voice.createAudioResource(fs.createReadStream("./commands/fun/soundboardSounds/ping.mp3"));
      audioPlayer.play(resource);
      return;
    }
    //Music Interactions
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
      .setCustomId("stopbtn")
      .setLabel("⏹️")
      .setStyle("PRIMARY"),
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
      .setCustomId("stopbtn")
      .setLabel("⏹️")
      .setStyle("PRIMARY"),
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
    if(interaction.customId === "stopbtn"){
      if(!queue) return interaction.reply({content: "Nothing playing lol.", ephemeral: true})
      interaction.client.distube.stop(interaction)
      interaction.reply(`Stopped by <@${interaction.user.id}>`)
    }
  },
}
