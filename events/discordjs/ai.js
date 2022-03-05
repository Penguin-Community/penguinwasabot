const fetch = require("node-fetch-commonjs")
module.exports = {
  name: "messageCreate",
  async execute(message){
    if(!message.mentions.has(message.client.user)) return;
    let msg = message.content.replace(/(<@!\d{18}>|<@\d{18}>)/g, " ")
    if(msg === " ") return message.reply("?");
    await fetch(`http://api.brainshop.ai/get?bid=164412&key=3XOdwDh5edlCzoMB&uid=1&msg=${encodeURIComponent(msg)}`)
      .then((response) => {
        response.json().then((result) => {
          message.reply(result.cnt)
        })
     })
  },
}
