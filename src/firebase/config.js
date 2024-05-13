import firebase from 'firebase/app' 

import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC60Me1vBvftXFD35wTCm0qUYbipM-3AvE",
  authDomain: "tpblog-3fd80.firebaseapp.com",
  projectId: "tpblog-3fd80",
  storageBucket: "tpblog-3fd80.appspot.com",
  messagingSenderId: "167562787238",
  appId: "1:167562787238:web:ef7dc4a30716f8cc73b767"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Step 2 : Init the firestore service 
// If we want to do any communication with the firestore db (eg. add documents) 
// we can use projectFirestore variable 
const projectFirestore = firebase.firestore() 
//Step 3 : Export projectFirestore 
// This will enable the use the firebase in different components 
export {projectFirestore} 