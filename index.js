// Require the necessary discord.js classes

const {Client,Events,GatewayIntentBits} = require('discord.js');
const token = require('./config.json');
const dotenv = require('dotenv')

// Create a new client instance

const client = new Client({intents: [GatewayIntentBits.Guilds]});

dotenv.config();

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

//Log in to Discord with token

client.login(process.env.DISCORD_TOKEN);

