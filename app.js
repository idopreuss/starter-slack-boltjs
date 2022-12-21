
const express = require('express')
const { App, ExpressReceiver } = require('@slack/bolt');


const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });
receiver.router.use(express.static('public'))
const app = new App({
  receiver,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
console.log(process.env.SLACK_BOT_TOKEN);
console.log(process.env.SLACK_SIGNING_SECRET);

slackBody = {
    "text": "Test"
}

// The echo command simply echoes on command
app.command('/room', async ({ command, ack, respond }) => {
  // Acknowledge command request
  await ack();

  await respond(`Directions to ${command.text} will be coming soon. Stay tuned!`);
});

app.message('room', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
    await ack();
    await say({
    text: `Hey there <@${message.user}>!`,
    text: `Hey there there <@${message.user}>!`,
    thread_ts: message.ts
  });
});
app.event('app_mention', async ({ event, say }) => {
  await say({
    text: `Hello <@${event.user}>: If you send me a :wave: I'll send you a button to click. If you add a reaction to a message I'll say thanks.`,
    thread_ts: event.ts
  })
});
app.event('reaction_added', async ({ event, say }) => {
  await say({
    text: `Thanks for the :${event.reaction}:`,
    thread_ts: event.item.ts
  })
});
app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  // console.log(JSON.stringify(body,null,2))
  await say({
    text: `<@${body.user.id}> you clicked the button. Well done.`,
    thread_ts: body.message.ts
  });
});
(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();