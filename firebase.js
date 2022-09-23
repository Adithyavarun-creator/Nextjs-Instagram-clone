import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCS3IAJeVsUCpD-LE-6cP23B0_FNurxSO4",
  authDomain: "instagram-nextjs-f939a.firebaseapp.com",
  projectId: "instagram-nextjs-f939a",
  storageBucket: "instagram-nextjs-f939a.appspot.com",
  messagingSenderId: "179280998341",
  appId: "1:179280998341:web:1095a5ee53440819d025ac",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
