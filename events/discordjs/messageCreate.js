const path = require("path")
module.exports = {
  name: "messageCreate",
  async execute(message){
    const client = message.client
    if(message.guild.id !== "765125984323633161" || message.guild.id !== "905388276356104192") return message.channel.send("This bot has been restricted to Penguin Community. \n Join Penguin Community if you want to use this bot. \nhttps://discord.gg/cJ29fa2ZQR");
    const customprefix = await client.db.get(`customprefix_${message.author.id}`)
    if(message.content === "pw!getprefix"){
      if(!customprefix) return message.reply("You dont have a custom prefix set!")
      message.channel.send(`Your custom prefix is ${customprefix}`)
    }
    var prefix = customprefix ? customprefix : client.config.prefix
    if (message.author.bot || !message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;
    try {
      cmd.run(client, message, args)
    } catch (e) {
      console.error(e)
      message.channel.send(`Error: \`${e}\``)
  }
  },
}
