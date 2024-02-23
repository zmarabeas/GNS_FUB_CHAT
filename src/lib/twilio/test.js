// ENVIRONMENT VARIABLES
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// TEST KEY
// const accountSid = 'AC8f002dd8ce9227beb4df996a820074f1';
// const authToken = 'fc055dced5b6605521ae07c6f4756d01';

// LIVE KEY
const accountSid = 'ACf8ccd164ab96b9ba138f68c1a4ab7b91';
const authToken = '3d0fa3c0837c04348dad5f29ed564661';

// const client = require('twilio')(accountSid, authToken);
import twilio from 'twilio';
const client = twilio(accountSid, authToken);

// twilioClient.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//     //  from: '+15017122661',
//      from: '+18888575941',
//      to: '+18777804236',
//      // to: '+17347510417'
//    })
//   .then((message)=> console.log(message.sid));

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+12363019250',
    to: '+18777804236'
  })
  .then(message => console.log(message.sid));
