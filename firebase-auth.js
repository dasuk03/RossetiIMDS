
// Firebase Authentication module
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export function initAuth(app){
  return getAuth(app);
}

export async function login(auth,email,password){
  return signInWithEmailAndPassword(auth,email,password);
}

export async function logout(auth){
  return signOut(auth);
}

export { onAuthStateChanged };
