import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8YrMA781ydGg_qfeSO3GRuib-dK1_Z98",
  authDomain: "e-clone-35aa1.firebaseapp.com",
  databaseURL: "https://e-clone-35aa1.firebaseio.com",
  projectId: "e-clone-35aa1",
  storageBucket: "e-clone-35aa1.appspot.com",
  messagingSenderId: "694036263214",
  appId: "1:694036263214:web:5df6ecee458f152831cabf",
  measurementId: "G-JMW2HQGBYH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
