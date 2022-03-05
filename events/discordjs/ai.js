const fetch = require("node-fetch-commonjs")
module.exports = {
  name: "messageCreate",
  async execute(message){
    if(!message.mentions.has(message.client.user)) return;
    let msg = message.content.replace(/(<@!\d{18}>|<@\d{18}>)/g, " ")
    if(msg === " ") return message.reply("?");
    let args = msg.split(" ");
    if(args.includes("who")){
      if(args.includes("created") && args.includes("you")){
        message.reply("I was created by Meesamᴾᴺᴳ#3751. AI Powered by Acobot")
        return;
      }
      if(args.includes("is") && message.content.includes("your") && args.includes("creator")){
        message.reply("I was created by Meesamᴾᴺᴳ#3751. AI Powered by Acobot")
        return;
      }
    }
    await fetch(`http://api.brainshop.ai/get?bid=164412&key=3XOdwDh5edlCzoMB&uid=1&msg=${encodeURIComponent(msg)}`)
      .then((response) => {
        response.json().then((result) => {
          message.reply(result.cnt)
        })
     })
  },
}
