import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAsDW800MaRYSFyM5cW4Jvkp8g_UOvVxNk",
  authDomain: "metcare-bfc0a.firebaseapp.com",
  projectId: "metcare-bfc0a",
  storageBucket: "metcare-bfc0a.appspot.com",
  messagingSenderId: "675310517344",
  appId: "1:675310517344:web:d9878cc877c38509e5d705",
  measurementId: "G-VNDMVBV0CV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);