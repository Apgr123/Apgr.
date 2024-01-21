const { Client, RichPresence } = require("discord.js-selfbot-v13");
const express = require('express')
const server = express();
const client = new Client({checkUpdate: false,});

server.all('/', (req, res)=>{
    res.send("Any problems? contact Lxnyz#7772 On Discord")
})

client.on("ready", async() => {
  const r = new RichPresence()
    .setApplicationId('1036786648987471882')
    .setType('STREAMING') //You can change it to STREAMING, PLAYING, LISTENING, WATCHING, COMPETING
    .setURL('https://twitch.tv/apgrgt') //You can use your own Twitch link
    
   // .setState('2 of 12') //Text 2
    
      .setName('AFK') //Text 1
    
      .setDetails('24/7 AFK') //Text 3
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1176952548545003660/1198775639466053724/images_2.png?ex=65c021d0&is=65adacd0&hm=6456f2694bcf2544d529d2b5334b89a34303e90f7fa4fcbd2fa4756c3af25d22& ') //You Can Use Gifs!
    
    //.setAssetsSmallImage('mp:attachments/1009061802593763398/1095000347526828116/1681138826284.png') Remove "//" in the ".setAssetsSmallImage" section if you want to use a small image 
    
    //.setAssetsLargeText('life is like walking trash')

  .addButton('Watch','https://twitch.tv/apgrgt')
 
  .setStartTimestamp(Date.now())
                        
                client.user.setActivity(r.toJSON());
  console.log(client.user.tag)
})

server.listen(3000, () => {
  console.log("Listening to Port:3000")

client.on('debug', (a) => {
  if(a.startsWith("Hit a 429")) process.kill(1)
})
  
  client.login(process.env.Token)
});