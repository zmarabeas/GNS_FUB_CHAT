import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// const twiml = require('twilio').twiml.MessagingResponse;
const { MessagingResponse } = require('twilio').twiml;


const twiml = new MessagingResponse();

twiml.message('The Robots are coming! Head for the hills!');

console.log(twiml.toString());

