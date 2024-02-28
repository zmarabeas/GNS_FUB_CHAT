import { getDatabase, ref, set } from "firebase/database";
import { FirebaseDB as db } from "../../config/firebase/firebase.js";

function writeUserData(name: string, birthday: string, userId: string = 'default') {
  set(ref(db, 'users' + userId), {
    full_name: name,
    date_of_birth: birthday
  });
}

export function GET({ request } : any) 
{
    let firstName : string = request.searchParams.get('firstName') ?? 'Default';
    let lastName : string  = request.searchParams.get('lastName') ?? 'Default';
    let userId : string = request.searchParams.get('userId') ?? 'Default';
    console.log('GET request received');
    writeUserData(firstName, lastName);
    //return new Response(`Hello ${firstName} ${lastName}`);
}



