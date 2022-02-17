module.exports = {
    name: "status",
    run: async (client, message, args) => {
        const Discord = require('discord.js');
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Status')
            .setThumbnail(client.user.avatarURL())
            .addField('Ping', client.ws.ping, true)
            .addField('Uptime', client.uptime, true)
            .setTimestamp();
        message.channel.send({embeds: [embed]});
    }
}