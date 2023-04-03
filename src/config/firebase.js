
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// por se tratar de um programa simples, vou deixar as chaves expostas, 
// porém num projeto maior escondemos no nosso servidor, 
// estudar mais sobre segurança de banco de dados.
const firebaseConfig = {
  apiKey: "AIzaSyAuw3rVDDyBNuA4EDQgB06F7Zw4jg2Vu6Y",
  authDomain: "tiktok-clone-4fed0.firebaseapp.com",
  projectId: "tiktok-clone-4fed0",
  storageBucket: "tiktok-clone-4fed0.appspot.com",
  messagingSenderId: "819288883647",
  appId: "1:819288883647:web:c1a370cc1e50cbae95e10a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;