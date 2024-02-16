// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// var accountSid = 'ACf8ccd164ab96b9ba138f68c1a4ab7b91';
// var authToken = 'a8e7e68dd35e643e331f3d8d9d0afbad';
// var client = require('twilio')(accountSid, authToken);
// // console.log('client', client);
// client.messages
//     .create({
//     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//     from: '+18888575941', //(888) 857-5941
//     to: '+17347510417'
//     // to: '+18777804236'
// })
//     .then(function (message) { return console.log(message); });

const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
