// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZWJpxHEBRzPxaGyQK58VmL22faVaN6i0",
    authDomain: "blue-moon-hotel-53c25.firebaseapp.com",
    projectId: "blue-moon-hotel-53c25",
    storageBucket: "blue-moon-hotel-53c25.appspot.com",
    messagingSenderId: "253992300289",
    appId: "1:253992300289:web:f271419989a241032c3500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;