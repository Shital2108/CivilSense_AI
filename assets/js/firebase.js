// assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// ✅ Firebase Config (use your real config)
const firebaseConfig = {
  apiKey: "AIzaSyDi3UVTIt7LKti5EYFPCGQ6w4bISB16J1s",
  authDomain: "civicssense-1.firebaseapp.com",
  projectId: "civicssense-1",
  storageBucket: "civicssense-1.firebasestorage.app",
  messagingSenderId: "991852026422",
  appId: "1:991852026422:web:dc0187be618661ff8f9697"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Add issue
export async function saveIssue(issue) {
  return await addDoc(collection(db, "complaints"), issue);
}

// ✅ At the bottom of your assets/js/firebase.js
export async function getAllIssues() {
  const snapshot = await getDocs(collection(db, "complaints"));
  const data = [];
  snapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}
