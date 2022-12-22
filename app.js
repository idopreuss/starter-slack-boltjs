
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});


// const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });
// receiver.router.use(express.static('public'))


slackBody = {
    "text": "Test"
}

// The echo command simply echoes on command
app.command('/room', async ({ message, say }) => {
  await say(`_Who's there?_`);
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();