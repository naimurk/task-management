// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk_3qev81qWTLagcSeBTSYE8LtX5zvrqA",
  authDomain: "task-managment-3bc6c.firebaseapp.com",
  databaseURL: "https://task-managment-3bc6c-default-rtdb.firebaseio.com",
  projectId: "task-managment-3bc6c",
  storageBucket: "task-managment-3bc6c.appspot.com",
  messagingSenderId: "854426294841",
  appId: "1:854426294841:web:f7ae18e72bb73efd2ccbe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)