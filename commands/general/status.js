module.exports = {
    name: "status",
    run: async (client, message, args) => {
        const Discord = require('discord.js');
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Status')
            .addFields(
                { name: 'Ping', value: client.ws.ping + 'ms' },
                { name: 'Uptime', value: client.uptime }
            )
            .setTimestamp()
        message.channel.send({ embeds: [embed] });
    }
}