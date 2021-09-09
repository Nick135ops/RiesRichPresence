const RP=require("discord-rpc");
const config=require("./config.json")
const client=new RP.Client({
    transport: "ipc"
});

client.on("ready", ()=>{
    client.setActivity({
        state: config.state,
        details: config.deatils,
        startTimestamp: new Date(),
        buttons: [{label: config.buttonLabel, url: config.buttonLink}],
        largeImageKey: config.largeImageKey,
        largeImageText: config.largeImageText,
        smallImageKey: config.smallImageKey,
        smallImageText: config.smallImageText
    })
    console.log("Rich Presence is now active and connected to your Discord Client!")
})

client.login({
    clientId: config.ClientID
})