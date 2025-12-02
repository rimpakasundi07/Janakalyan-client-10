// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtjzOsMwOtjOTXGgs5_HmjapFkEnfBo7E",
  authDomain: "janakalyan-51bca.firebaseapp.com",
  projectId: "janakalyan-51bca",
  storageBucket: "janakalyan-51bca.firebasestorage.app",
  messagingSenderId: "176573484170",
  appId: "1:176573484170:web:4414c454fa19c8da9b3173",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
