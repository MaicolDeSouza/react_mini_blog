import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50vRDJPJ54aaeCC-9rY7DOP8IIDNX0aw",
  authDomain: "react-miniblog-bb4eb.firebaseapp.com",
  projectId: "react-miniblog-bb4eb",
  storageBucket: "react-miniblog-bb4eb.appspot.com",
  messagingSenderId: "241577656458",
  appId: "1:241577656458:web:567ee1cb6fc804a224ed73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializando banco de dados
const db = getFirestore(app);
export { db };
