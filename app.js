
const { App, SocketModeReceiver } = require('@slack/bolt');

const socketModeReceiver = new SocketModeReceiver({
  token: process.env.APP_TOKEN
})

const app = new App({
  receiver:socketModeReceiver,
  token: process.env.SLACK_BOT_TOKEN,
  // signingSecret: process.env.SLACK_SIGNING_SECRET,
  // socketMode:true, // enable the following to use socket mode
  // appToken: process.env.APP_TOKEN,
});


// The echo command simply echoes on command
app.command('/room', async ({ say }) => {
  try {
      await ack();
      say("Yaaay! that command works!");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

(async () => {
  // Start the app
  await app.start('3000');
  console.log('⚡️ Bolt app is running!');
})();