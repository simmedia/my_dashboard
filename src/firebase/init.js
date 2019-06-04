import firebase from 'firebase'
import firestore from 'firebase/firestore'

 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDzJ9V0K1lKLlxJSPqsJEuZB4PMroe1M98",
    authDomain: "simmedia-note.firebaseapp.com",
    databaseURL: "https://simmedia-note.firebaseio.com",
    projectId: "simmedia-note",
    storageBucket: "simmedia-note.appspot.com",
    messagingSenderId: "559394300410"
  };
  
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()