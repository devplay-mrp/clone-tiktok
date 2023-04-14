
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// por se tratar de um programa simples, vou deixar as chaves expostas, 
// porém num projeto maior escondemos no nosso servidor, 
// estudar mais sobre segurança de banco de dados.
const firebaseConfig = {
  apiKey: "AIzaSyB2jAzwKXO51ySYv_VDueOEIAFeRlReCXg",
  authDomain: "tiktok--devplay.firebaseapp.com",
  projectId: "tiktok--devplay",
  storageBucket: "tiktok--devplay.appspot.com",
  messagingSenderId: "398131811393",
  appId: "1:398131811393:web:78d29d794825052e19a2c0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;

