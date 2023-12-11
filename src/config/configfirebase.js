import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6A343947jVuD8Tq2mkFGdXmv_qX43hbA",
  authDomain: "coder-60995-ecomerce.firebaseapp.com",
  projectId: "coder-60995-ecomerce",
  storageBucket: "coder-60995-ecomerce.appspot.com",
  messagingSenderId: "25340618104",
  appId: "1:25340618104:web:2a6c0b5e5950192281948d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig }; 