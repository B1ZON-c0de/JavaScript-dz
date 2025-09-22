import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC078RxEnQCtev-IlMHfYpRW0dYhw2UsFw',
  authDomain: 'todo-list-1c5c3.firebaseapp.com',
  projectId: 'todo-list-1c5c3',
  storageBucket: 'todo-list-1c5c3.firebasestorage.app',
  messagingSenderId: '1097934546503',
  appId: '1:1097934546503:web:a75d6609861e2071163362',
  databaseURL:
    'https://todo-list-1c5c3-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
