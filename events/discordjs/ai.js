const fetch = require("node-fetch-commonjs")
module.exports = {
  name: "messageCreate",
  async execute(message){
    if(!message.mentions.has(message.client.user)) return;
    await fetch(`http://api.brainshop.ai/get?bid=164412&key=3XOdwDh5edlCzoMB&uid=1&msg=${encodeURIComponent(message.content)}`)
      .then((response) => {
        response.json().then((result) => {
          message.reply(result.cnt)
        })
     })
  },
}
