// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'chat-app-4ccf6.firebaseapp.com',
  projectId: 'chat-app-4ccf6',
  storageBucket: 'chat-app-4ccf6.appspot.com',
  messagingSenderId: '293002679317',
  appId: '1:293002679317:web:e4016b8db2cd205cf12a1c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
