import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzWJcArS9aQEwJc8NwAB2hJTv6Yr-cHuQ",
  authDomain: "fireblogsyt-ef595.firebaseapp.com",
  projectId: "fireblogsyt-ef595",
  storageBucket: "fireblogsyt-ef595.appspot.com",
  messagingSenderId: "280832580276",
  appId: "1:280832580276:web:0f00a83b51e949294095e1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
