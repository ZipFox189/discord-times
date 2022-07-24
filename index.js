const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("message", (msg) => {

  let prefix = "!";
  let message = msg.content;

  let channel = msg.channelId;
  let botChannel = "1000729719777525780";

  const sendMessage = (message) => {
    client.channels.cache.get(botChannel).send(message);
  };
    
   if (channel === botChannel) {
     if (message.startsWith(prefix)) {
       const command = message.slice(prefix.length).split(" ")[0];

       let admins = ["JJCode#3136"];

       // let isAdmin = `${msg.author.username}#${msg.author.discriminator}` in admins;
       let isAdmin = msg.member.roles.cache.find(
         (role) => role.name === "Admin"
       );

       switch (command) {
         case "stats":
           isAdmin
             ? sendMessage(`This server has ${msg.guild.memberCount} members`)
             : sendMessage("You are not an admin");
           break;

         case "help":
           sendMessage("This is a help command");
           break;
       }
     }
   } 
 }

  // if (msg.content === "Hello") {
  //   sendMessage("Hello!");
  // }
});

client.login(process.env.token);
