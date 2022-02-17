const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, args) => {
  let allowedids = [
  '809702164724449290',
  '808184733158604800'
]
if(!allowedids.includes(message.author.id)) return;
        let msg = db.get(`snipemsg_${message.channel.id}`)
        let senderid = db.get(`snipesender_${message.channel.id}`)
        let pfp = db.get(`snipepfp_${message.channel.id}`)
        if(!msg) {
            return message.channel.send(`Well I Did Not Find Any Deleted Message In This Channel, Lol`)
        }
        let embed = new Discord.MessageEmbed()
 
        .setAuthor(db.get(`snipesender_${message.channel.id}`), pfp)
        .setDescription(msg)
        .setColor("RANDOM")
        .setFooter('Holy Shit, The Godly Snipe!1!')
        message.channel.send({ embeds: [embed] })

}