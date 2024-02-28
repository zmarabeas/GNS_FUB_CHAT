// import { sendSMS } from '../../../lib/index.js';
// import { FirebaseDB } from '../../../config/firebase/firebase.js';
// import TwilioClient from '../../../config/twilio/twilio.js';
// import { twilioNumberCA, twilioConsole } from '../../../config/twilio/twilio.js';

// const _sendSMS = async (req, res) => {
//   const { body, to } = req.body;
//   try {
//     const message = await TwilioClient.messages.create({
//       body,
//       from: twilioNumberCA,
//       to
//     });
//     res.status(200).send({ message, success: true });
//   } catch (error) {
//     res.status(500).send({ error, success: false });
//   }
// }
