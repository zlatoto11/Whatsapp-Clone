import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlkA0UPfW45E0-h9VZGyHduMKg3hlsKgg",
  authDomain: "whatsapp-clone-4508b.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-4508b.firebaseio.com",
  projectId: "whatsapp-clone-4508b",
  storageBucket: "whatsapp-clone-4508b.appspot.com",
  messagingSenderId: "1058282085426",
  appId: "1:1058282085426:web:067b79c9edb8892abff02b",
  measurementId: "G-G6SKJT430V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

// Implicit imports give access to all visible types in the type (or package) that precedes the ".*"; types imported in this way never shadow other types.
export { auth, provider };
// Explicit imports give access to just the named type; they can shadow other types that would normally be visible through an implicit import, or through the normal package visibility rules
export default db;
