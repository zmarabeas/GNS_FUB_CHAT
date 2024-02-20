/*
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
const initializeApp = require("firebase/app");
const getAnalytics = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ij7x2up4mqxJvnArSI-adaDxPhUzt0k",
  authDomain: "gns-fub-chat-45501.firebaseapp.com",
  projectId: "gns-fub-chat-45501",
  storageBucket: "gns-fub-chat-45501.appspot.com",
  messagingSenderId: "502025304899",
  appId: "1:502025304899:web:2fb48774eb1cf125744df6",
  measurementId: "G-19HXS5CKH2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/


const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gns-fub-chat-45501-default-rtdb.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("/");
const usersRef = ref.child('users');

// write/replace
// set / update / push / transaction
usersRef.set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing'
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper'
  }
});


// retrieve data
usersRef.once("value", function(snapshot) {
  console.log(snapshot.val());
});

// callbacks
//
// return all data in ref when value is changed
/*
usersRef.on('value', (snapshot) => {
  console.log(snapshot.val(), 'cb');
	
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});
*/

// Get the data on a value that has changed
usersRef.on('child_added', (snapshot, prevChildKey) => {
  const newPost = snapshot.val();
//	console.log(newPost);
  console.log('Name : ' + newPost.full_name);
  console.log('Birthdate: ' + newPost.date_of_birth);
  console.log('Previous Post ID: ' + prevChildKey);
});

// Get the data on a value that has changed
usersRef.on('child_changed', (snapshot) => {
  const changedPost = snapshot.val();
  //console.log(changedPost);
  console.log('The updated name is ' + changedPost.full_name);
});

// Get the data on a post that has been removed
usersRef.on('child_removed', (snapshot) => {
  const deletedPost = snapshot.val();
  console.log('The person named \'' + deletedPost.full_name + '\' has been deleted from the database');
});
