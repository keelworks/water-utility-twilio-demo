// send-sms.js
require('dotenv').config();
const twilio = require('twilio');

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_FROM,
  TO_NUMBER,
  MESSAGE
} = process.env;

(async () => {
  try {
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    const msg = await client.messages.create({
      from: TWILIO_FROM,     // or use { messagingServiceSid: 'MG...' }
      to: TO_NUMBER,
      body: MESSAGE || 'Hello from Twilio!'
      // Optional: statusCallback: 'https://your-ngrok-url/sms-status'
    });
    console.log('Queued. Message SID:', msg.sid, 'Status:', msg.status);

    // (Optional) check delivery status once after a short delay
    await new Promise(r => setTimeout(r, 3000));
    const latest = await client.messages(msg.sid).fetch();
    console.log('Updated Status:', latest.status); // queued/sent/delivered/failed
  } catch (e) {
    console.error('Error:', e.message, e.code || '');
  }
})();
