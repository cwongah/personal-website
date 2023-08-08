import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHoloUR_O0fR29dbzUps0z0UuNH_TnRzg",
  authDomain: "christopher-hk-wong.firebaseapp.com",
  projectId: "christopher-hk-wong",
  storageBucket: "christopher-hk-wong.appspot.com",
  messagingSenderId: "490903520575",
  appId: "1:490903520575:web:8eb7600c85af36d5f5bf8a",
  measurementId: "G-JZGQF1PRZW"
};

const app = initializeApp(firebaseConfig);

export default app
export const db = getFirestore()