const SlackBot = require('slackbots');

const bot = new SlackBot({
token: 'YOUR_SLACK_BOT_TOKEN',
name: 'My Bot'
});

// Start the bot
bot.on('start', () => {
console.log('Bot has started');
});

// Message handler
bot.on('message', data => {
// Check if the message is from a bot
if (data.subtype && data.subtype === 'bot_message') return;

// Get the user who sent the message
const user = data.user;

// Get the message text
const message = data.text;

// Do something with the message here
console.log( "Received message from ${user}: ${message}");
});
