import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwq-VLiZcgNOoXRBZnF2nQoSUCVFhgSeg",
  authDomain: "shop-510b2.firebaseapp.com",
  projectId: "shop-510b2",
  storageBucket: "shop-510b2.appspot.com",
  messagingSenderId: "751191164385",
  appId: "1:751191164385:web:537519bf0c82e5aedc3ea0",
  measurementId: "G-478REBWDWN"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);