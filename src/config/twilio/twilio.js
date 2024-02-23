import { accountSid, authToken } from './settings.js';

import twilio from 'twilio';
const TwilioClient = twilio(accountSid, authToken);

const twilioNumberCA = '+12363019250';
const twilioNumberUS = '+18888575941';
const twilioConsole = '+18777804236';

export default TwilioClient;
export { twilioNumberCA, twilioNumberUS, twilioConsole };
