import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider}  from "firebase/auth"
import 'firebase/firestore'
import 'firebase/database';
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnHpbrb9A7hyvJKcXD0AqKABpeyjb80lc",
  authDomain: "movie-ticket-booking-sys-fa0eb.firebaseapp.com",
  databaseURL: "https://movie-ticket-booking-sys-fa0eb-default-rtdb.firebaseio.com",
  projectId: "movie-ticket-booking-sys-fa0eb",
  storageBucket: "movie-ticket-booking-sys-fa0eb.appspot.com",
  messagingSenderId: "565358651403",
  appId: "1:565358651403:web:aca705e844e97681817f0e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getDatabase(app);
const storage=getStorage(app);

const provider = new GoogleAuthProvider();


export {auth,provider,db,storage}