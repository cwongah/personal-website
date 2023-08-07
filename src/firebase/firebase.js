import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOTBdYkRC5EKnupm32LvrXcCc-pLuGMUU",
    authDomain: "christopher-wong.firebaseapp.com",
    projectId: "christopher-wong",
    storageBucket: "christopher-wong.appspot.com",
    messagingSenderId: "493633400074",
    appId: "1:493633400074:web:b47387a89418091422def3"
  };

const app = initializeApp(firebaseConfig);

export default app
export const db = getFirestore()