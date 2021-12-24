import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAH8RFsOTXcJ6tt4kBhE13NGcGUPU0VOwM",
    authDomain: "my-money-cf218.firebaseapp.com",
    projectId: "my-money-cf218",
    storageBucket: "my-money-cf218.appspot.com",
    messagingSenderId: "291897187290",
    appId: "1:291897187290:web:ef72e12481c2005535fee3"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }