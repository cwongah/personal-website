import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const MESSAGE_COLLECTION = 'messages'

export function addMessage(name, email, message){
    addDoc(collection(db, MESSAGE_COLLECTION), {name, email, message})
}