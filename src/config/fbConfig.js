import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBJFwOV2N2sRCXClXPZKkzAxmS3-0R5RxQ",
  authDomain: "donation-blog.firebaseapp.com",
  databaseURL: "https://donation-blog.firebaseio.com",
  projectId: "donation-blog",
  storageBucket: "donation-blog.appspot.com",
  messagingSenderId: "940673968522",
  appId: "1:940673968522:web:817272b4735e76b7d94073",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;
