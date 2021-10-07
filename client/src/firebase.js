import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5eBuRl1PBlfhcb5l1D-EiGmMd3aiyeqM",
    authDomain: "react-firebase-crud-b2aed.firebaseapp.com",
    projectId: "react-firebase-crud-b2aed",
    storageBucket: "react-firebase-crud-b2aed.appspot.com",
    messagingSenderId: "102083392407",
    appId: "1:102083392407:web:e99fb4fc052f73a1b48ad2"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  export default firebase