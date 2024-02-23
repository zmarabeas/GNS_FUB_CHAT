
// export function GET({ request } : any) 
// {
//     let firstName : string = request.searchParams.get('firstName') ?? 'Default';
//     let lastName : string  = request.searchParams.get('lastName') ?? 'Default';
//     let userId : string = request.searchParams.get('userId') ?? 'Default';
//     console.log('GET request received');
//     writeUserData(firstName, lastName);
// //    let firstName : string = url.searchParams.get('firstName') ?? 'Default firstname';
// //    let lastName : string = url.searchParams.get('lastName') ?? 'Default lastname';
// //    return new Response("Hello " + firstName + " " + lastName);
// 	  return new Response("Time to party");
// }

import { getDatabase, ref, set, update } from "firebase/database";
import { FirebaseDB as db } from "../../../config/firebase.js";

async function writeUserData(name: string, birthday: string, userId: string = 'default') {
  update(ref(db, 'users'), {
    [userId]: {
      full_name: name,
      date_of_birth: birthday
    }
  })
}


export function GET({ url } : any) 
{
    let fname: string = url.searchParams.get('name') ?? 'Default';
    let birthday: string = url.searchParams.get('birthday') ?? 'Default';
    let userId : string = url.searchParams.get('userId') ?? 'Default';
    writeUserData(fname, birthday, userId);
    return new Response("Hello " + fname);
}

