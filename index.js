const RP=require("discord-rpc");
const config=require("./config.json")
const client=new RP.Client({
    transport: "ipc"
});

client.on("ready", ()=>{
    client.setActivity({
        state: config.state ? config.state : undefined,
        details: config.details ? config.details : undefined,
        startTimestamp: new Date(),
        buttons: config.buttonLabel && config.buttonLink ? [{label: config.buttonLabel, url: config.buttonLink}] : undefined,
        largeImageKey: config.largeImageKey ? config.largeImageKey : undefined,
        largeImageText: config.largeImageText ? config.largeImageText : undefined,
        smallImageKey: config.smallImageKey ? config.smallImageKey : undefined,
        smallImageText: config.smallImageText ? config.smallImageText : undefined
    })
    console.log("Rich Presence is now active and connected to your Discord Client!")
})

client.login({
    clientId: config.ClientID
})