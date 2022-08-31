import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,

    authDomain: "buystate-8f532.firebaseapp.com",

    projectId: "buystate-8f532",

    storageBucket: "buystate-8f532.appspot.com",

    messagingSenderId: "841234138656",

    appId: "1:841234138656:web:d51610cfbd9dcd685b9e45",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
