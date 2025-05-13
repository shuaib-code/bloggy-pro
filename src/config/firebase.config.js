import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDymoIXXA0Bnem5vSXJYNuY3eTmw9oY96k",
  authDomain: "bloggy-pro.firebaseapp.com",
  projectId: "bloggy-pro",
  storageBucket: "bloggy-pro.appspot.com",
  messagingSenderId: "477566778668",
  appId: "1:477566778668:web:df4fca2edb66e583350089"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;