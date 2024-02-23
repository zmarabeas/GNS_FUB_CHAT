
//const admin = require("firebase-admin");

//const serviceAccount = require("./serviceAccountKey.json");
/***********************************************
      ****************TODO****************      
	1. Convert fb.cjs to web sdk functions
	2. Test all server and database functions
	3. Build simple front end
***********************************************/

export function GET({ request } : any) 
{
    let firstName : string = request.searchParams.get('firstName') 
                                                ?? 'Default firstname';
    let lastName : string  = request.searchParams.get('lastName')
                                                ?? 'Default lastname';
    return new Response(`Hello ${firstName} ${lastName}`);
}



