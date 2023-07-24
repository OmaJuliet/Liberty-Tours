// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG0zGds8EKIOM7zbvK4tvzetj0UHDD_S0",
  authDomain: "liberty-tours-a86a1.firebaseapp.com",
  projectId: "liberty-tours-a86a1",
  storageBucket: "liberty-tours-a86a1.appspot.com",
  messagingSenderId: "1049922448871",
  appId: "1:1049922448871:web:ab7e873b1910a47a78e142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;