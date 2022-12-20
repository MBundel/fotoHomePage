// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNhuOMF4TYhcmDZbeeX7S82OuP2-zCPSQ",
  authDomain: "fotohomepage.firebaseapp.com",
  projectId: "fotohomepage",
  storageBucket: "fotohomepage.appspot.com",
  messagingSenderId: "216146770167",
  appId: "1:216146770167:web:4dc8d576c8e056c14dbbf2",
  measurementId: "G-BE2Q9PE341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.projectFirestore();

export {projectFirestore, projectFirestore, app}