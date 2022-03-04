const fetch = require("node-fetch-commonjs")
module.exports = {
  name: "messageCreate",
  async execute(message){
    if(!message.mentions.has(message.client.user)) return;
    await fetch(`https://api.brainshop.ai/get?bid=164412&key=${process.env.AIKEY}&uid=!&msg=${encodeURIComponent(message.content)}`)
      .then((response) => {
        response.json().then((result) => {
          message.reply(result.cnt)
        })
     })
  },
}
