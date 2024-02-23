
//const admin = require("firebase-admin");

//const serviceAccount = require("./serviceAccountKey.json");
/***********************************************
      ****************TODO****************      
	1. Convert fb.cjs to web sdk functions
	2. Test all server and database functions
	3. Build simple front end
***********************************************/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ij7x2up4mqxJvnArSI-adaDxPhUzt0k",
  authDomain: "gns-fub-chat-45501.firebaseapp.com",
  databaseURL: "https://gns-fub-chat-45501-default-rtdb.firebaseio.com",
  projectId: "gns-fub-chat-45501",
  storageBucket: "gns-fub-chat-45501.appspot.com",
  messagingSenderId: "502025304899",
  appId: "1:502025304899:web:2fb48774eb1cf125744df6",
  measurementId: "G-19HXS5CKH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export function GET({ request } : any) 
{
    let firstName : string = request.searchParams.get('firstName') 
                                                ?? 'Default firstname';
    let lastName : string  = request.searchParams.get('lastName')
                                                ?? 'Default lastname';
    return new Response(`Hello ${firstName} ${lastName}`);
}



