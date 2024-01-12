// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEFoaRlLTI9zbPz6QeWN9Xhnzrrl-Ugsg",
  authDomain: "charius-web.firebaseapp.com",
  projectId: "charius-web",
  storageBucket: "charius-web.appspot.com",
  messagingSenderId: "168420856775",
  appId: "1:168420856775:web:9fd91be0121611a244ffe2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
