// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-MjT5iMCNB-7G_NVQoiooip-Bl59Ef7I',
  authDomain: 'apppp-28d51.firebaseapp.com',
  projectId: 'apppp-28d51',
  storageBucket: 'apppp-28d51.appspot.com',
  messagingSenderId: '63644924381',
  appId: '1:63644924381:web:f1c85c00ffbed968735e34',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
