import 'firebase/database';
import firebase from 'firebase/app'

const app= firebase.initializeApp ({
  apiKey: "AIzaSyCoq7fbCne5OfRg6lajiNiDsJtKxrFjGNs",
  authDomain: "aideaffixe-459a7.firebaseapp.com",
  databaseURL: "https://aideaffixe-459a7.firebaseio.com",
  projectId: "aideaffixe-459a7",
  storageBucket: "",
  messagingSenderId: "798288572161",
  appId: "1:798288572161:web:0227d9218ac267147e3500"
});


export const db = app.database();
export const categorieRef = db.ref('Categorie');
export const articleRef = db.ref('Article');







