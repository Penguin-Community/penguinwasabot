function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = {
  name: "guildMemberAdd",
  async execute(member){
    if(member.guild.id !== '905388276356104192') return;
    member.send('Welcome to Penguin Community!').catch(console.error)
    await wait(1000)
    member.send({ content: "If you are stuck then you can check `#verify` channel and react (click the thing encircled in the screenshot below)", files: ['./e.png'] }).catch(console.error)
    await wait(1000)
    member.send('Hope you have a good time!').catch(console.error)
  },
}
