import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, firestore } from "../firebase";

export function Registration(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => credentials.user)
    .then((user) => {
      setDoc(doc(firestore, "users", email), {
        favourite: [],
        history: [],
      });
      return user;
    })
    .catch((error) => {
      toast.error(error.message);
    });
}

export async function Login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => credentials.user)
    .catch((error) => {
      toast.error(error.message);
    });
}
