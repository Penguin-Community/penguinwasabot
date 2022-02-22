const Discord = require('discord.js');
module.exports = {
    name: "soundboard",
    run: async (client, message, args) => {
        let row = new Discord.MessageActionRow()
        .addComponents(
             new Discord.MessageButton()
             .setCustomId("soundboardbtn")
             .setLabel("🏓 Ping")
             .setStyle("PRIMARY"),
        )
        message.channel.send({components: [row]})
    }
}