// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBPMhyEVk64q8f8gr6hANSVtsw3lkrnEqg",
  authDomain: "celebare-intern.firebaseapp.com",
  projectId: "celebare-intern",
  storageBucket: "celebare-intern.appspot.com",
  messagingSenderId: "173876177404",
  appId: "1:173876177404:web:fdd7d9e6ed31e878b06a79",
  measurementId: "G-MF158QSEWM",
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
