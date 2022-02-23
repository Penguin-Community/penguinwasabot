const Discord = require('discord.js');
module.exports = {
    name: "soundboard",
    run: async (client, message, args) => {
        let row = new Discord.MessageActionRow()
        .addComponents(
             new Discord.MessageButton()
             .setCustomId("pingbtn")
             .setLabel("🏓 Ping")
             .setStyle("PRIMARY"),
             new Discord.MessageButton()
             .setCustomId("amogus")
             .setLabel("Amogus")
             .setStyle("PRIMARY"),
             new Discord.MessageButton()
             .setCustomId("surprisemuthafuka")
             .setLabel("Surprise")
             .setStyle("PRIMARY"),
             new Discord.MessageButton()
             .setCustomId("lol")
             .setLabel("Risitas Laugh")
             .setStyle("PRIMARY"),
             new Discord.MessageButton()
             .setCustomId("e")
             .setLabel("I have no idea what to name this")
             .setStyle("PRIMARY"),
        )
        let row2 = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("sadge")
            .setLabel("Sadge")
            .setStyle("PRIMARY"),
            new Discord.MessageButton()
            .setCustomId("ok")
            .setLabel("Okay")
            .setStyle("PRIMARY"),
            new Discord.MessageButton()
            .setCustomId("no")
            .setLabel("No")
            .setStyle("PRIMARY"),
            new Discord.MessageButton()
            .setCustomId("bruh")
            .setLabel("Bruh")
            .setStyle("PRIMARY"),
        )
        message.channel.send({components: [row, row2]})
    }
}