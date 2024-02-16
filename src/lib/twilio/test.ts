// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = 'ACf8ccd164ab96b9ba138f68c1a4ab7b91';
const authToken = 'a8e7e68dd35e643e331f3d8d9d0afbad';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    //  from: '+15017122661',
     from: '+18888575941',
     to: '+17347510417'
   })
  .then((message: any): any => console.log(message.sid));
