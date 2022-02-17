module.exports = {
    name: "ping",
    run: async (client, message, args) => {
      message.reply(`🏓 Pong! Bot Ping Is ${client.ws.ping}ms`).catch(console.error);
    }
}