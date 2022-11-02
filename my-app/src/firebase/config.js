
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYE9yFkfPB48fgwfsvb63BT9mBtsGBj2U",
  authDomain: "pupinoskids-89a7d.firebaseapp.com",
  projectId: "pupinoskids-89a7d",
  storageBucket: "pupinoskids-89a7d.appspot.com",
  messagingSenderId: "873812997306",
  appId: "1:873812997306:web:659dae448fe3c9f0563e83"
};

const app = initializeApp(firebaseConfig)

export  const firestoneInit = () => app