import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC5fQBqSi8X93avDgaO6diKfabYe1X1fuU",
    authDomain: "chat-firebase-react-d414e.firebaseapp.com",
    projectId: "chat-firebase-react-d414e",
    storageBucket: "chat-firebase-react-d414e.appspot.com",
    messagingSenderId: "669062287900",
    appId: "1:669062287900:web:3e26cc9ced4dc95e3445d9",
    measurementId: "G-DW39KBW2C2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();