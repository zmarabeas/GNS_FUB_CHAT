import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics"; 
import { firebaseConfig } from "./settings.js"; 

const app = initializeApp(firebaseConfig);

// const FirebaseAnalytics = getAnalytics(app);
const FirebaseDB = getDatabase(app);

export { FirebaseDB } 

