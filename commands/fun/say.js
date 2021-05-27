module.exports = {
    name: 'say',
    description: "Make me say something.",
    category: "Fun",
    callback: ({ message, args }) => {
        let messageArgs = args.join(' ');

        if(!messageArgs) return;
        
        message.channel.send(messageArgs).then((msg) =>{
            message.delete();
        }).catch((err) =>{
            throw err
        });
    }
}