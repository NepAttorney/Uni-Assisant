module.exports = {
    name: 'say',
    permissions: [],
    description: "Make me say something.",
    aliases: [],
    execute(client, message, args, discord){

        //This will check if the message contains any bad words.
        //const meanyWords = ["pussy", "Pussy", "dick", "Dick", "penis", "Penis", "piss", "Piss", "sex", "Sex", "vagina", "Vagina", "nipple", "Nipple", "nipples", "Nipples", "cunt", "Cunt", "asshole", "Asshole", "piss", "Piss"]

        //for (var i=0; i < meanyWords.length; i++) {
        //    if (message.content.includes(meanyWords[i])) return message.channel.send("Sorry, but I can't say any bad words.");
        //}
        
        let messageArgs = args.join(' ');

        if(!messageArgs) return;
        
        message.channel.send(messageArgs).then((msg) =>{
            message.delete();
        }).catch((err) =>{
            throw err
        });
    }
}