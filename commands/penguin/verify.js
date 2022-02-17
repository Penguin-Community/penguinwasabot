module.exports = {
  name: "verify",
  run: async (client, message, args) => {
    let boy = message.guild.roles.cache.find(r => r.id === "871349037578723328");
    let girl = message.guild.roles.cache.find(r => r.id === "877830829533978645");
    let member = message.mentions.members.first();
    if(message.member.roles.cache.some(role => role.id === '854940303671820328')) {
    if(!member) return message.channel.send('In terms Of Mentions, We have no mentions');
    if(!args[1]) return message.channel.send('Mention Boy Or Girl');
    if(member.roles.cache.some(role => role.id === '871349037578723328')) return message.channel.send('Imagine trying to verify when they are Already Verified');
    if(member.roles.cache.some(role => role.id === '877830829533978645')) return message.channel.send('Imagine trying to verify when they are Already Verified');
    if(args[1] === 'boy'){
    member.roles.add(boy).catch(console.error);
    message.channel.send('Verified');
    }
    if(args[1] === 'girl'){
    member.roles.add(girl).catch(console.error);
    message.channel.send('Verified');
    }
  }
}
}