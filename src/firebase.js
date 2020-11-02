import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPIWNAEvD3NNyzNKKXuGZmYgV-R4w3xQU",
    authDomain: "messenger-clone-74943.firebaseapp.com",
    databaseURL: "https://messenger-clone-74943.firebaseio.com",
    projectId: "messenger-clone-74943",
    storageBucket: "messenger-clone-74943.appspot.com",
    messagingSenderId: "171482335006",
    appId: "1:171482335006:web:4883f20c29662e4130eb0f",
    measurementId: "G-Y09BYYNYGY"
});

const db = firebaseApp.firestore();

export default db;