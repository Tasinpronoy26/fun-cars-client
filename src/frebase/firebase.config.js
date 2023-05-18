// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0RKIvsx40lnXJ8M53Td563yXsDy0Typg",
    authDomain: "fun-cars-97bb5.firebaseapp.com",
    projectId: "fun-cars-97bb5",
    storageBucket: "fun-cars-97bb5.appspot.com",
    messagingSenderId: "392364463471",
    appId: "1:392364463471:web:67c0878fb301d2c79c849a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;