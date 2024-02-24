import { writeUserData } from './index.js';

export function GET({ request } : any) 
{
    let firstName : string = request.searchParams.get('firstName') ?? 'Default';
    let lastName : string  = request.searchParams.get('lastName') ?? 'Default';
    let userId : string = request.searchParams.get('userId') ?? 'Default';
    console.log('GET request received');
    writeUserData(firstName, lastName, userId);
    //return new Response(`Hello ${firstName} ${lastName}`);
}



