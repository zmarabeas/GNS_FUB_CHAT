// import { createRequire } from 'module';

// const require = createRequire(import.meta.url);
// const { MessagingResponse } = require('twilio').twiml;
//
import { json } from '@sveltejs/kit';


export async function POST({ request }) 
{
  const data = await request.json();
  console.log(data);

  //return success
  return new Response('Success');
}


export function GET({ request }) 
{
  //return something simple
  return new Response('Hello worker!');
}

