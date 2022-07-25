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
    
  if (msg.content === "Hello") {
    sendMessage("Hello!");
  }
});

client.login(process.env.token);
