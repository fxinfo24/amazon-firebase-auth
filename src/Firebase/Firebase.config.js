// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASbaFTEf7Qqg1RAIagR7xmyFF4g49CNTQ",
  authDomain: "fir-auth-bc716.firebaseapp.com",
  projectId: "fir-auth-bc716",
  storageBucket: "fir-auth-bc716.appspot.com",
  messagingSenderId: "380395221873",
  appId: "1:380395221873:web:197735c9d66de21c403cd0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;