import { TwilioClient } from '../config/twilio/twilio.js';
import { twilioNumberCA } from '../config/twilio/twilio.js';


export const sendSMS = async (req, res) => {
  const { body, to } = req.body;
  try {
    const message = await TwilioClient.messages.create({
      body,
      from: twilioNumberCA,
      to
    });
    res.status(200).send({ message, success: true });
  } catch (error) {
    res.status(500).send({ error, success: false });
  }
}

