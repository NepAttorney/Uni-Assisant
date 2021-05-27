module.exports = {
    name: 'ping',
    description: "Ping pong.",
    category: "Utilities",
    callback: async ({ message }) => {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! \`${m.createdTimestamp - message.createdTimestamp}\`ms`)
    }
}