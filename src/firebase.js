import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDgdLUyTqTsO6iJUc8RmuGIZwnIuiBs_JI",
  authDomain: "chatapp-fa721.firebaseapp.com",
  projectId: "chatapp-fa721",
  storageBucket: "chatapp-fa721.appspot.com",
  messagingSenderId: "8904959890",
  appId: "1:8904959890:web:cd0089229f12b021a6034b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
