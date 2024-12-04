import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-_qZSRGCuIKODSNN8ttHEkgt6FhygPZg",
  authDomain: "whatsapp-clone-77773.firebaseapp.com",
  projectId: "whatsapp-clone-77773",
  storageBucket: "whatsapp-clone-77773.appspot.com",
  messagingSenderId: "25099109529",
  appId: "1:25099109529:web:17d4a0cdd63fda5041a408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }