
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

  await respond(`{
    "type": "modal",
    "title": {
      "type": "plain_text",
      "text": "My App",
      "emoji": true
    },
    "submit": {
      "type": "plain_text",
      "text": "Submit",
      "emoji": true
    },
    "close": {
      "type": "plain_text",
      "text": "Cancel",
      "emoji": true
    },
    "blocks": [
      {
        "type": "section",
        "block_id": "section567",
        "text": {
          "type": "mrkdwn",
          "text": "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
        },
        "accessory": {
          "type": "image",
          "image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
          "alt_text": "Haunted hotel image"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Danny Torrence left the following review for your property:"
        }
      },
      {
        "type": "section",
        "block_id": "section789",
        "fields": [
          {
            "type": "mrkdwn",
            "text": "*Average Rating*\n1.0"
          }
        ]
      }
    ]
  }`);
  
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();