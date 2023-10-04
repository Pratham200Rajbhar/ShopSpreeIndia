import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDui4Duf1JunmKrlQBOn3EBx_SR8is3DgA",
    authDomain: "shopspreeindia-71963.firebaseapp.com",
    databaseURL: "https://shopspreeindia-71963-default-rtdb.firebaseio.com",
    projectId: "shopspreeindia-71963",
    storageBucket: "shopspreeindia-71963.appspot.com",
    messagingSenderId: "529326924848",
    appId: "1:529326924848:web:c15b585bc7224dbb03b9f5"
  };
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export default database

console.log(database)