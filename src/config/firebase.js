import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyBcL1LQfU6nGbc4tga4kpv1o6h4ZFIPid8",
  authDomain: "tiktok-clone-ebecc.firebaseapp.com",
  projectId: "tiktok-clone-ebecc",
  storageBucket: "tiktok-clone-ebecc.appspot.com",
  messagingSenderId: "506466435491",
  appId: "1:506466435491:web:7afc958563b9123e965a16"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;