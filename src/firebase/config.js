import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCyx7eGo19yJ1qHUaPi_MZqvF1x0JzEsX8',
  authDomain: 'ttburgerking.firebaseapp.com',
  projectId: 'ttburgerking',
  storageBucket: 'ttburgerking.appspot.com',
  messagingSenderId: '723180679123',
  appId: '1:723180679123:web:40c71d42a0337c48f4c926',
  measurementId: 'G-23F1N6Y25T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectStorageEmulator(storage, 'localhost', 9199);
}

export { db, auth, storage };
