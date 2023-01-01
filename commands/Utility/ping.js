module.exports = {
    name : "ping",
    run : async (client,message,args)=> {

    message.channel.send({content : `🎶 Ping! ${client.ws.ping}`})  
    }
}