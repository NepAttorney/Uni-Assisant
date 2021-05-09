module.exports = {
    name: 'ping',
    permissions: [],
    description: "Ping pong.",
    aliases: [],
    async execute(client, message, args){
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`)
    }
}