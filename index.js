require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
      GatewayIntentBits.Guilds, 
      GatewayIntentBits.GuildMessages, 
      GatewayIntentBits.MessageContent,
    ],
  });

client.on("messageCreate", async (message) => {
  if(message.author.bot){

  } else {
    message.reply("hello");
  }
  console.log(message.content);
});

client.on('interactionCreate', (interaction) => {
  console.log(interaction);
  interaction.reply('Pong!');
});

require('dotenv').config();

client.login(process.env.TOKEN);