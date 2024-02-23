/***********************************************
      ****************TODO****************      
	1. Convert fb.cjs to web sdk functions
	2. Test all server and database functions
	3. Build simple front end
***********************************************/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./settings.js"; 
//import { getAnalytics } from "firebase/analytics";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const Firebase_DB = getDatabase(app);

