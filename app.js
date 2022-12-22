
const express = require('express')
const { App, ExpressReceiver } = require('@slack/bolt');


const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });
receiver.router.use(express.static('public'))
const app = new App({
  receiver,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});
console.log(process.env.SLACK_BOT_TOKEN);
console.log(process.env.SLACK_SIGNING_SECRET);

slackBody = {
    "text": "Test"
}

// The echo command simply echoes on command
app.command('/room', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();

  await say('Request approved 👍');
  
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();