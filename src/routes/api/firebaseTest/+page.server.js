// import { writeUserData } from './index.js';

export function GET(request) 
{
    let firstName= request.searchParams.get('firstName') ?? 'Default';
    let lastName= request.searchParams.get('lastName') ?? 'Default';
    let userId= request.searchParams.get('userId') ?? 'Default';
    console.log('GET request received');
    // writeUserData(firstName, lastName, userId);
    let ret = {
      status: 200,
      body: { 'firstName': firstName, 'lastName': lastName, 'userId': userId }
    };
    return ret;
    //return new Response(`Hello ${firstName} ${lastName}`);
}



