// import { createRequire } from 'module';

// const require = createRequire(import.meta.url);
// const { MessagingResponse } = require('twilio').twiml;

export function POST({ request }) 
{
  const data = request.json();
  console.log(data);
  // const twiml = new MessagingResponse();
  // twiml.message('The Robots are coming! Head for the hills!');

  // console.log(twiml.toString());
  // return new Response(twiml.toString(), {
  //   headers: { 'content-type': 'text/xml' },
  // });
}


export function GET({ request }) 
{
  //return something simple
  return new Response('Hello worker!');
}

