import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    // apiKey: "AIzaSyDGmVBx5LAYJuIq_Ni1nZBenfcVUFX-SyY",
    // authDomain: "ecommerce-with-react-2ac06.firebaseapp.com",
    // databaseURL: "https://ecommerce-with-react-2ac06.firebaseio.com",
    // projectId: "ecommerce-with-react-2ac06",
    // storageBucket: "ecommerce-with-react-2ac06.appspot.com",
    // messagingSenderId: "690603499200",
    // appId: "1:690603499200:web:09860bc318b5b7fd74d725",
    // measurementId: "G-88N35MC51Q"

  apiKey: "AIzaSyBxNX2mSSq-s_Fy-2YBTdHrwTpKOYgfgho",
  authDomain: "test-firebase-d7a28.firebaseapp.com",
  databaseURL: "https://test-firebase-d7a28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-firebase-d7a28",
  storageBucket: "test-firebase-d7a28.appspot.com",
  messagingSenderId: "498115060112",
  appId: "1:498115060112:web:2bc80b512a7e574b815315",
  measurementId: "G-W7TTJT6NCZ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }