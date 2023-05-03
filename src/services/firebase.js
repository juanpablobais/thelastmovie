import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDruanoMC19POaO1FjcZ2-HYQTiBFUh-c",
  authDomain: "the-last-movie-6fb35.firebaseapp.com",
  databaseURL: "https://the-last-movie-6fb35-default-rtdb.firebaseio.com",
  projectId: "the-last-movie-6fb35",
  storageBucket: "the-last-movie-6fb35.appspot.com",
  messagingSenderId: "930082392618",
  appId: "1:930082392618:web:0d93dd3ac78310b496d153",
  measurementId: "G-EJX5FG6MY4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firebaseConfig, auth, firestore };
